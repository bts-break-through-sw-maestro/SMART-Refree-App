import React from "react";
import { Camera } from "expo-camera";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { AntDesign } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    flex: 1;
`;

const CameraContainer = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    color: red;
    font-size: 22px;
`;

const BackButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 40;
    justify-content: center;
    align-items: flex-end;
`;

const BackButton = styled.TouchableOpacity`
    margin-right: 20px;
`;

const StartPauseButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 40;
    justify-content: center;
    align-items: center;
`;

const StartPauseButton = styled.TouchableOpacity`
    transform: rotate(90deg);
`;

const PlayPresenter = ({
    loading,
    hasPermission,
    navigation,
    isRecord,
    startPauseButtonClicked
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <CameraContainer>
                {hasPermission ? (
                    <Camera
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }}
                        ref={ref => {
                            this.camera = ref;
                        }}
                    />
                ) : (
                    <Text>Don't have Permission for this App.</Text>
                )}
            </CameraContainer>

            <BackButtonContainer>
                <BackButton onPress={() => navigation.navigate("Menu")}>
                    <AntDesign name="arrowup" size={44} color="white" />
                </BackButton>
            </BackButtonContainer>

            <StartPauseButtonContainer>
                <StartPauseButton onPress={startPauseButtonClicked}>
                    {isRecord ? (
                        <AntDesign
                            name="pausecircleo"
                            size={44}
                            color="white"
                        />
                    ) : (
                        <AntDesign name="playcircleo" size={44} color="white" />
                    )}
                </StartPauseButton>
            </StartPauseButtonContainer>
        </Container>
    );

PlayPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    isRecord: PropTypes.bool.isRequired,
    hasPermission: PropTypes.bool,
    startPauseButtonClicked: PropTypes.func
};

export default withNavigation(PlayPresenter);
