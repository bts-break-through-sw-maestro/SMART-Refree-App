import React from "react";
import Props from "prop-types";
import styled from "styled-components";

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

const TeamLogoText = styled.Text``;

const TeamInfo = ({ guildInfo }) => (
    <TeamContainer>
        <LogoImgContainer>
            <TeamLogoText>Team Logo</TeamLogoText>
        </LogoImgContainer>
        <TeamInfoContainer>
            <TeamName>{guildInfo.name}</TeamName>
            <TeamRecord>
                {guildInfo.wins}승 {guildInfo.loses}패 {guildInfo.draws}무
            </TeamRecord>
        </TeamInfoContainer>
    </TeamContainer>
);

TeamInfo.propsType = {
    guildInfo: Props.object
};

export default TeamInfo;
