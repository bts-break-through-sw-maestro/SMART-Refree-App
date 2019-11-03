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

const MemberRecordContainer = styled.View`
    flex-direction: row;
    text-align: center;
`;

const MemberRecordCategoryText = styled.Text`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-right: 3px;
`;

const MemberRecordValueText = styled.Text`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-right: 3px;
`;

const TeamMember = ({ member, navigation }) => (
    <MemberContainer onPress={() => navigation.navigate("TeamDetail")}>
        <MemberProfileImgContainer></MemberProfileImgContainer>
        <MemberProfileContentContainer>
            <MemberNameContainer>{member.name}</MemberNameContainer>
            <MemberRecordContainer>
                <MemberRecordCategoryText>포지션</MemberRecordCategoryText>
                <MemberRecordValueText>{member.position}</MemberRecordValueText>
                {/* <MemberRecordCategoryText>안타</MemberRecordCategoryText>
                <MemberRecordValueText>100</MemberRecordValueText>
                <MemberRecordCategoryText>홈런</MemberRecordCategoryText>
                <MemberRecordValueText>10</MemberRecordValueText> */}
            </MemberRecordContainer>
        </MemberProfileContentContainer>
    </MemberContainer>
);

TeamMember.propTypes = {
    member: PropTypes.object
};

export default withNavigation(TeamMember);
