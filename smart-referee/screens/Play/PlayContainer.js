import React from "react";
import { Alert } from "react-native";
import PlayPresenter from "./PlayPresenter";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            isRecord: false,
            hasPermission: null,
            video: null
        };

        this.cameraRef = React.createRef();
    }

    componentDidMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        if (status === "granted") {
            this.setState({ hasPermission: true });
        } else {
            this.setState({ hasPermission: false });
        }
    };

    _StartPauseButtonClicked = () => {
        const { isRecord } = this.state;

        if (isRecord) {
            this._StopRecordingVideo();
        } else {
            this._StartRecordingVideo();
        }
    };

    _StartRecordingVideo = async () => {
        if (this.cameraRef.current) {
            console.log("====== START RECORDING VIDEO =====");
            this.setState({ isRecord: true });

            const video = await this.cameraRef.current.recordAsync();
            this.setState({ video });

            try {
                if (video !== null) {
                    this._SavingVideo();
                } else {
                    throw Error();
                }
            } catch {
                console.log("Video Is Null");
            }
        }
    };

    _StopRecordingVideo = async () => {
        console.log("======= STOP RECORDING VIDEO =====");
        this.setState({ isRecord: false });
        this.cameraRef.current.stopRecording();
    };

    _SavingVideo = async () => {
        console.log("======= START SAVING VIDEO =======");

        try {
            const { video } = this.state;
            const ALBUM_NAME = "SMART REFEREE";
            console.log(video);
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );

            if (status === "granted") {
                const asset = await MediaLibrary.createAssetAsync(video.uri);
                let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);

                if (album === null) {
                    console.log(album);
                    album = await MediaLibrary.createAlbumAsync(
                        ALBUM_NAME,
                        asset
                    );
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album);
                }

                this.setState({ video: null });
            } else {
                this.setState({ hasPermission: false });
            }
        } catch (error) {
            console.log(error);
            Alert.alert("비디오 없음");
        }

        console.log("======= FINISH SAVING VIDEO ======");
    };

    render() {
        const { hasPermission, loading, isRecord } = this.state;

        return (
            <PlayPresenter
                loading={loading}
                hasPermission={hasPermission}
                isRecord={isRecord}
                _StartPauseButtonClicked={this._StartPauseButtonClicked}
                cameraRef={this.cameraRef}
            />
        );
    }
}
