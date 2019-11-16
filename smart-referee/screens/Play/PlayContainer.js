import React from "react";
import { Alert, Platform } from "react-native";
import { imageUploadApi } from "../../api";
import PlayPresenter from "./PlayPresenter";
import * as Permissions from "expo-permissions";
import * as ImageManipulator from "expo-image-manipulator";
import { captureRef as takeSnapshotAsync } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

let i = 0;

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            isRecord: false,
            hasPermission: null
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

    componentWillUnmount = () => {
        cancelAnimationFrame(this.takePhotoRecursion);
    };

    _StartPauseButtonClicked = () => {
        const { isRecord } = this.state;

        if (isRecord) {
            // this._StopRecordingVideo();
            clearTimeout(this.takePhotoRecursion);
            this.setState({ isRecord: false });
        } else {
            // this._StartRecordingVideo();
            this._TakePhoto();
            this.setState({ isRecord: true });
        }
    };

    _SavePhoto = async uri => {
        const ALBUM_NAME = "SMART REFEREE";

        try {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status === "granted") {
                const asset = await MediaLibrary.createAssetAsync(uri);
                let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);
                if (album === null) {
                    album = await MediaLibrary.createAlbumAsync(
                        ALBUM_NAME,
                        asset
                    );
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album.id);
                }
            } else {
                this.setState({ hasPermission: false });
            }
        } catch (error) {
            console.log(error);
        }
    };

    doTakePhoto = async () => {
        try {
            if (this.cameraRef.current) {
                let captureResult = await takeSnapshotAsync(
                    this.cameraRef.current,
                    {
                        format: "jpg",
                        width: 416,
                        height: 416,
                        quality: 1
                    }
                );
                let image = null;

                if (Platform.OS === "android") {
                    let resizedImage = await ImageManipulator.manipulateAsync(
                        captureResult,
                        [
                            { resize: { width: 416, height: 416 } },
                            { rotate: 270 }
                        ],
                        { format: ImageManipulator.SaveFormat.JPEG }
                    );

                    image = resizedImage.uri;
                } else if (Platform.OS === "ios") {
                    throw Error("iOS에서는 이용할 수 없습니다.");
                    image = captureResult;
                }

                console.log(i++);

                // let formData = new FormData();

                // formData.append(image, {
                //     uri: image,
                //     type: "image/jpg",
                //     name: "image.jpg"
                // });

                // const data = await imageUploadApi.uploadImage(formData);
                // console.log(data);
            }
        } catch (error) {
            Alert.alert("Error Corrupt");
            console.log(error);
        }
    };

    _TakePhoto = async () => {
        this.intervalHandler = setInterval(this.doTakePhoto, 30);
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
