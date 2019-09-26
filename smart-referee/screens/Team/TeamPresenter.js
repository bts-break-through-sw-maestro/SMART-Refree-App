import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { HEADER_COLOR, BG_COLOR } from "../../constants/Colors";
import TeamInfo from "../../components/TeamInfo";
import TeamMemberList from "../../components/TeamMemberList";

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

const TeamMemberContainer = styled.ScrollView`
    flex: 7;
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
                    <TeamInfo />
                    <TeamMemberContainer>
                        <TeamMemberList />
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
                        <TeamJoinButton
                            onPress={() => navigation.navigate("TeamSearch")}
                        >
                            <TeamJoinButtonText>팀 가입하기</TeamJoinButtonText>
                        </TeamJoinButton>
                        <TeamJoinButton
                            onPress={() => navigation.navigate("TeamCreate")}
                        >
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
