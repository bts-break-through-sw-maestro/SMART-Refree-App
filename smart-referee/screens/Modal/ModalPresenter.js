import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { Avatar } from "react-native-elements";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const NameContainer = styled.View`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Name = styled.Text`
    font-size: 30px;
    font-weight: 600;
`;

const InfoContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const TeamInfo = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-vertical: 10px;
`;

const InfoText = styled.Text`
    font-size: 24px;
    font-weight: 500;
`;

const BarContainer = styled.Text`
    font-size: 16px;
    padding-horizontal: 10px;
`;

const UsernameContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const UserNameText = styled.Text`
    font-size: 24px;
`;

const TopButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 40;
    flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
    flex: 5;
    align-items: flex-start;
    padding-left: 20px;
`;

const SettingsButton = styled.TouchableOpacity`
    flex: 5;
    align-items: flex-end;
    padding-right: 20px;
`;

const CreditContainer = styled.View``;

const CreditText = styled.Text`
    font-size: 24px;
`;

const ModalPresenter = ({ loading, navigation }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <TopButtonContainer>
                <BackButton onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={40} color="black" />
                </BackButton>
                <SettingsButton>
                    <MaterialCommunityIcons
                        name="settings"
                        size={40}
                        color="black"
                    />
                </SettingsButton>
            </TopButtonContainer>
            <Avatar
                rounded
                size="xlarge"
                icon={{ name: "user", type: "font-awesome" }}
            />
            <NameContainer>
                <Name>김투수</Name>
            </NameContainer>
            <InfoContainer>
                <UsernameContainer>
                    <UserNameText>aaa@naver.com</UserNameText>
                </UsernameContainer>

                <TeamInfo>
                    <InfoText>무소속</InfoText>
                    <BarContainer>|</BarContainer>
                    <InfoText>투수</InfoText>
                    <BarContainer>|</BarContainer>
                    <InfoText>21</InfoText>
                </TeamInfo>
                <CreditContainer>
                    <CreditText>⚾️ 100</CreditText>
                </CreditContainer>
            </InfoContainer>
        </Container>
    );

ModalPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default withNavigation(ModalPresenter);
