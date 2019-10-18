import React from "react";
import { Alert } from "react-native";
import { imageUploadApi } from "../../api";
import PlayPresenter from "./PlayPresenter";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as ImageManipulator from "expo-image-manipulator";

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
            // this._StopRecordingVideo();
            this.setState({ isRecord: false });
        } else {
            // this._StartRecordingVideo();
            this._TakePhoto();
            this.setState({ isRecord: true });
        }
    };

    _TakePhoto = async () => {
        try {
            if (this.cameraRef.current) {
                let { uri } = await this.cameraRef.current.takePictureAsync({
                    quality: 1
                });

                const resizedImage = await ImageManipulator.manipulateAsync(
                    uri,
                    [{ resize: { width: 416, height: 416 } }],
                    { format: ImageManipulator.SaveFormat.JPEG }
                );

                console.log(resizedImage);

                if (resizedImage) {
                    this._SavePhoto(resizedImage.uri);

                    let formData = new FormData();

                    formData.append("file", resizedImage.uri);
                    formData.append("type", "image/jpeg");
                    formData.append("name", "image.jpeg");

                    console.log(formData);

                    imageUploadApi.uploadImage(formData);
                }

                // setTimeout(this._TakePhoto, 1000);
            }
        } catch (error) {
            Alert.alert(error.code);
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

// _StartRecordingVideo = async () => {
//     if (this.cameraRef.current) {
//         console.log("====== START RECORDING VIDEO =====");
//         this.setState({ isRecord: true });

//         const video = await this.cameraRef.current.recordAsync();
//         this.setState({ video });

//         try {
//             if (video !== null) {
//                 this._SavingVideo();
//             } else {
//                 throw Error();
//             }
//         } catch {
//             console.log("Video Is Null");
//         }
//     }
// };

// _SavingVideo = async () => {
//     console.log("======= START SAVING VIDEO =======");

//     try {
//         const { video } = this.state;
//         const ALBUM_NAME = "SMART REFEREE";
//         console.log(video);
//         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

//         if (status === "granted") {
//             const asset = await MediaLibrary.createAssetAsync(video.uri);
//             let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);

//             if (album === null) {
//                 album = await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset);
//             } else {
//                 await MediaLibrary.addAssetsToAlbumAsync([asset], album);
//             }

//             this.setState({ video: null });
//         } else {
//             this.setState({ hasPermission: false });
//         }
//     } catch (error) {
//         console.log(error);
//         Alert.alert("비디오 없음");
//     }

//     console.log("======= FINISH SAVING VIDEO ======");
// };

// _StopRecordingVideo = async () => {
//     console.log("======= STOP RECORDING VIDEO =====");
//     this.setState({ isRecord: false });
//     this.cameraRef.current.stopRecording();
// };
