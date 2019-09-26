import React from "react";
import Props from "prop-types";
import styled from "styled-components";
import TeamMember from "./TeamMember";

const CenterViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

var dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TeamMemberList = () => (
    <CenterViewContainer>
        {dummy.map(idx => (
            <TeamMember idx={idx} key={idx} />
        ))}
    </CenterViewContainer>
);

TeamMemberList.propsType = {};

export default TeamMemberList;
