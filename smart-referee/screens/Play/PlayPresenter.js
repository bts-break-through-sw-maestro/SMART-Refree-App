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

const PlayPresenter = ({ loading, hasPermission, navigation }) =>
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
        </Container>
    );

PlayPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    hasPermission: PropTypes.bool
};

export default withNavigation(PlayPresenter);
