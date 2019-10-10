import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TopButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 40;
    z-index: 1;
`;

const BackButton = styled.TouchableOpacity`
    flex: 5;
    align-items: flex-start;
    padding-left: 20px;
`;

const ProfileContainer = styled.View`
    flex: 5;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const ProfileTextContainer = styled.View`
    margin: 10px;
`;

const ProfileNameText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

const ProfileEmailText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-top: 3px;
`;

const StatContainer = styled.View`
    flex: 2;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const StatDetailContainer = styled.View`
    flex-direction: row;
    margin: 5px;
`;

const StatCategoryText = styled.Text`
    font-size: 14px;
`;

const StatText = styled.Text`
    font-size: 14px;
`;

const ReleaseButtonContainer = styled.View`
    flex: 3;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ReleaseButton = styled.TouchableOpacity`
    height: 20%;
    width: 80%;
    background-color: #ef5350;
    justify-content: center;
    border-radius: 20px;
`;

const ReleaseButtonText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${BG_COLOR};
    text-align: center;
`;

const TeamPresenter = ({ user, loading, navigation }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <TopButtonContainer>
                <BackButton onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={40} color="black" />
                </BackButton>
            </TopButtonContainer>
            {user !== null ? (
                <>
                    <ProfileContainer>
                        <Avatar
                            rounded
                            size={120}
                            icon={{ name: "user", type: "font-awesome" }}
                        />
                        <ProfileTextContainer>
                            <ProfileNameText>{user.name}</ProfileNameText>
                            <ProfileEmailText>{user.email}</ProfileEmailText>
                        </ProfileTextContainer>
                    </ProfileContainer>
                    <StatContainer>
                        <StatDetailContainer>
                            <StatCategoryText>포지션</StatCategoryText>
                            <StatText>{user.position}</StatText>
                        </StatDetailContainer>
                        <StatDetailContainer>
                            <StatCategoryText>팀명</StatCategoryText>
                            <StatText>{user.teamName}</StatText>
                        </StatDetailContainer>
                        {user.isPitcher ? (
                            <>
                                <StatDetailContainer>
                                    <StatCategoryText>이닝</StatCategoryText>
                                    <StatText>{user.inning}</StatText>
                                </StatDetailContainer>
                                <StatDetailContainer>
                                    <StatCategoryText>삼진</StatCategoryText>
                                    <StatText>{user.strikeOut}</StatText>
                                </StatDetailContainer>
                                <StatDetailContainer>
                                    <StatCategoryText>피안타</StatCategoryText>
                                    <StatText>{user.hits}</StatText>
                                </StatDetailContainer>

                                <StatDetailContainer>
                                    <StatCategoryText>피홈런</StatCategoryText>
                                    <StatText>{user.homeRuns}</StatText>
                                </StatDetailContainer>
                            </>
                        ) : (
                            <>
                                <StatDetailContainer>
                                    <StatCategoryText>안타</StatCategoryText>
                                    <StatText>{user.hits}</StatText>
                                </StatDetailContainer>
                                <StatDetailContainer>
                                    <StatCategoryText>2루타</StatCategoryText>
                                    <StatText>{user.doubles}</StatText>
                                </StatDetailContainer>
                                <StatDetailContainer>
                                    <StatCategoryText>3루타</StatCategoryText>
                                    <StatText>{user.tripes}</StatText>
                                </StatDetailContainer>
                                <StatDetailContainer>
                                    <StatCategoryText>홈런</StatCategoryText>
                                    <StatText>{user.homeRuns}</StatText>
                                </StatDetailContainer>
                            </>
                        )}
                    </StatContainer>
                    <ReleaseButtonContainer>
                        {user.isMaster ? (
                            <ReleaseButton>
                                <ReleaseButtonText>방출하기</ReleaseButtonText>
                            </ReleaseButton>
                        ) : null}
                    </ReleaseButtonContainer>
                </>
            ) : null}
        </Container>
    );

TeamPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object
};

export default withNavigation(TeamPresenter);
