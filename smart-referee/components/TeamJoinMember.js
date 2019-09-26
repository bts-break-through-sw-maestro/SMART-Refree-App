import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

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

const JoinSubmitContainer = styled.View``;

const AcceptSubmitContainer = styled.View``;

const RejectSubmitContainer = styled.View``;

const TeamJoinMember = ({ idx, navigation }) => (
    <MemberContainer onPress={() => console.log("Fuck")}>
        <MemberProfileImgContainer></MemberProfileImgContainer>
        <MemberProfileContentContainer>
            <MemberNameContainer>김타자{idx}</MemberNameContainer>
            <JoinSubmitContainer>
                <AcceptSubmitContainer></AcceptSubmitContainer>
                <RejectSubmitContainer></RejectSubmitContainer>
            </JoinSubmitContainer>
        </MemberProfileContentContainer>
    </MemberContainer>
);

TeamJoinMember.propTypes = {
    idx: PropTypes.number.isRequired
};

export default withNavigation(TeamJoinMember);
