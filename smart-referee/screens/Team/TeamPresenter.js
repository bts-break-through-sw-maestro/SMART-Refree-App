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
`;

const MemberContainer = styled.TouchableOpacity`
    width: 90%;
    height: 80px;
    border: 1px solid black;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

const MemberProfileImgContainer = styled.View`
    width: 60px;
    height: 60px;
    border: 1px solid black;
    margin: 10px 20px;
    border-radius: 50px;
`;

const MemberProfileContentContainer = styled.View`
    flex: 7;
    flex-direction: column;
`;

const MemberNameContainer = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
`;

const MemberRecordContainer = styled.View`
    flex-direction: row;
    text-align: center;
`;

const MemberRecordCategoryText = styled.View`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
`;

const MemberRecordValueText = styled.View`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-right: 5px;
`;

var dummy = [1, 2, 3, 4, 5, 6];

const TeamPresenter = ({ loading, hasTeam }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {hasTeam ? (
                <>
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
                                <MemberContainer>
                                    <MemberProfileImgContainer></MemberProfileImgContainer>
                                    <MemberProfileContentContainer>
                                        <MemberNameContainer>
                                            김타자
                                        </MemberNameContainer>
                                        <MemberRecordContainer>
                                            <MemberRecordCategoryText>
                                                <Text>타수</Text>
                                            </MemberRecordCategoryText>
                                            <MemberRecordValueText>
                                                <Text>300</Text>
                                            </MemberRecordValueText>
                                            <MemberRecordCategoryText>
                                                <Text>안타</Text>
                                            </MemberRecordCategoryText>
                                            <MemberRecordValueText>
                                                <Text>100</Text>
                                            </MemberRecordValueText>
                                            <MemberRecordCategoryText>
                                                <Text>홈런</Text>
                                            </MemberRecordCategoryText>
                                            <MemberRecordValueText>
                                                <Text>10</Text>
                                            </MemberRecordValueText>
                                        </MemberRecordContainer>
                                    </MemberProfileContentContainer>
                                </MemberContainer>
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
