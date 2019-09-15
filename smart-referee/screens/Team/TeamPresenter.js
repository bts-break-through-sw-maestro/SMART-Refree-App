import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
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

const TeamButtonContainenr = styled.View`
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

const TeamPresenter = ({ loading, hasTeam }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {hasTeam ? (
                <Text>ss</Text>
            ) : (
                <>
                    <NoTeamTextContainer>
                        <NoTeamText>가입된 팀 정보가 없습니다.</NoTeamText>
                        <NoTeamText>
                            팀에 가입하거나 팀을 생성해보세요!
                        </NoTeamText>
                    </NoTeamTextContainer>
                    <TeamButtonContainenr>
                        <TeamJoinButton>
                            <TeamJoinButtonText>팀 가입하기</TeamJoinButtonText>
                        </TeamJoinButton>
                        <TeamJoinButton>
                            <TeamJoinButtonText>팀 생성하기</TeamJoinButtonText>
                        </TeamJoinButton>
                    </TeamButtonContainenr>
                </>
            )}
        </Container>
    );

TeamPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    hasTeam: PropTypes.bool.isRequired
};

export default TeamPresenter;
