import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import TeamMemberList from "../../components/TeamMemberList";
import TeamJoinMemberList from "../../components/TeamJoinMemberList";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TeamManageSummary = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TeamManageText = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
`;

const TeamManageListContainer = styled.ScrollView`
    flex: 9;
    width: 100%;
`;

const TeamManagePresenter = ({ loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <TeamManageSummary>
                <TeamManageText>가입된 팀원</TeamManageText>
            </TeamManageSummary>
            <TeamManageListContainer>
                <TeamMemberList />
            </TeamManageListContainer>
            <TeamManageSummary>
                <TeamManageText>가입 신청</TeamManageText>
            </TeamManageSummary>
            <TeamManageListContainer>
                <TeamJoinMemberList />
            </TeamManageListContainer>
        </Container>
    );

TeamManagePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default TeamManagePresenter;
