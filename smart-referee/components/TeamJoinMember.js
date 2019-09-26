import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";

const MemberContainer = styled.View`
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
    flex-direction: row;
`;

const MemberInfoContainer = styled.View`
    flex: 6;
`;

const MemberNameText = styled.Text`
    font-size: 16px;
    font-weight: 600;
`;

const MemberAgeText = styled.Text`
    font-size: 14px;
`;

const MemberPhoneText = styled.Text``;

const JoinSubmitContainer = styled.View`
    flex: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const AcceptSubmitContainer = styled.TouchableOpacity`
    margin-right: 5px;
`;

const RejectSubmitContainer = styled.TouchableOpacity``;

const TeamJoinMember = ({ idx }) => (
    <MemberContainer>
        <MemberProfileImgContainer></MemberProfileImgContainer>
        <MemberProfileContentContainer>
            <MemberInfoContainer>
                <MemberNameText>김타자{idx}</MemberNameText>
                <MemberAgeText>20세</MemberAgeText>
                <MemberPhoneText>010-1111-1111</MemberPhoneText>
            </MemberInfoContainer>
            <JoinSubmitContainer>
                <AcceptSubmitContainer onPress={() => console.log("OK")}>
                    <AntDesign name="checkcircle" size={32} color="green" />
                </AcceptSubmitContainer>
                <RejectSubmitContainer onPress={() => console.log("No")}>
                    <AntDesign name="closecircle" size={32} color="red" />
                </RejectSubmitContainer>
            </JoinSubmitContainer>
        </MemberProfileContentContainer>
    </MemberContainer>
);

TeamJoinMember.propTypes = {
    idx: PropTypes.number.isRequired
};

export default TeamJoinMember;
