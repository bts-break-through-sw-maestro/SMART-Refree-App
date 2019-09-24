import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import TeamMember from "../../components/TeamMember";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { HEADER_COLOR, BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    flex: 1;
`;

const NoTeamTextContainer = styled.View`
    flex: 1;
    padding-bottom: 30px;
    justify-content: center;
    align-items: center;
`;

const NoTeamText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    padding-vertical: 3px;
`;

const TeamButtonContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const TeamJoinButton = styled.TouchableOpacity`
    background-color: ${HEADER_COLOR};
    width: 50%;
    height: 50px;
    border-radius: 15px;
    justify-content: center;
    margin-vertical: 3px;
`;

const TeamJoinButtonText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: ${BG_COLOR};
    text-align: center;
`;

const TeamContainer = styled.View`
    flex: 3;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 10px 0px;
    border-bottom-width: 1px;
    border-bottom-color: black;
    width: 100%;
`;

const LogoImgContainer = styled.View`
    width: 100px;
    height: 100px;
    border: 1px solid black;
`;

const TeamInfoContainer = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

const TeamName = styled.Text`
    font-size: 18px;
    font-weight: 600;
`;
const TeamRecord = styled.Text`
    font-size: 14px;
    font-weight: 500;
`;

const TeamMemberContainer = styled.ScrollView`
    flex: 7;
`;

const CenterViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const TopButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 10;
`;

const SettingsButton = styled.TouchableOpacity`
    align-items: flex-end;
    padding-right: 20px;
`;

var dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TeamPresenter = ({ loading, hasTeam, isMaster, navigation, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {hasTeam ? (
                <>
                    {isMaster ? (
                        <TopButtonContainer>
                            <SettingsButton
                                onPress={() =>
                                    navigation.navigate("TeamManage")
                                }
                            >
                                <MaterialCommunityIcons
                                    name="settings"
                                    size={26}
                                    color="black"
                                />
                            </SettingsButton>
                        </TopButtonContainer>
                    ) : null}
                    <TeamContainer>
                        <LogoImgContainer>
                            <Text>Team Logo</Text>
                        </LogoImgContainer>
                        <TeamInfoContainer>
                            <TeamName>팀 이름</TeamName>
                            <TeamRecord>0승 0패 0무</TeamRecord>
                        </TeamInfoContainer>
                    </TeamContainer>
                    <TeamMemberContainer>
                        <CenterViewContainer>
                            {dummy.map(idx => (
                                <TeamMember idx={idx} key={idx} />
                            ))}
                        </CenterViewContainer>
                    </TeamMemberContainer>
                </>
            ) : (
                <>
                    <NoTeamTextContainer>
                        <NoTeamText>가입된 팀 정보가 없습니다.</NoTeamText>
                        <NoTeamText>
                            팀에 가입하거나 팀을 생성해보세요!
                        </NoTeamText>
                    </NoTeamTextContainer>
                    <TeamButtonContainer>
                        <TeamJoinButton>
                            <TeamJoinButtonText>팀 가입하기</TeamJoinButtonText>
                        </TeamJoinButton>
                        <TeamJoinButton>
                            <TeamJoinButtonText>팀 생성하기</TeamJoinButtonText>
                        </TeamJoinButton>
                    </TeamButtonContainer>
                </>
            )}
        </Container>
    );

TeamPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    hasTeam: PropTypes.bool.isRequired,
    isMaster: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default withNavigation(TeamPresenter);
