import React from "react";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";
import Layout from "../constants/Layout";

const Container = styled.View`
    width: ${Layout.width - 60};
    height: 80px;
    border-radius: 5px;
    border: 1px solid ${TINT_COLOR};
    margin-bottom: 7px;
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

const TeamContainer = styled.View`
    width: 40%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TeamLogoContainer = styled.View`
    border: 1px solid ${TINT_COLOR};
    border-radius: 50px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

const TeamLogoImg = styled.Text``;

const TeamInfoContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-horizontal: 7px;
`;

const TeamInfoTeamName = styled.Text`
    font-size: 14px;
    padding-bottom: 5px;
`;

const GameScore = styled.Text`
    font-weight: 600;
    font-size: 18px;
`;

const VsTextContainer = styled.View`
    align-items: center;
    justify-content: center;
    padding-horizontal: 10px;
`;

const VsText = styled.Text`
    font-weight: 500;
    font-size: 14;
`;

export default () => (
    <Container>
        <TeamContainer>
            <TeamLogoContainer>
                <TeamLogoImg>A</TeamLogoImg>
            </TeamLogoContainer>
            <TeamInfoContainer>
                <TeamInfoTeamName>Test Team A</TeamInfoTeamName>
                <GameScore>9</GameScore>
            </TeamInfoContainer>
        </TeamContainer>
        <VsTextContainer>
            <VsText>VS</VsText>
        </VsTextContainer>
        <TeamContainer>
            <TeamInfoContainer>
                <TeamInfoTeamName>Test Team B</TeamInfoTeamName>
                <GameScore>1</GameScore>
            </TeamInfoContainer>
            <TeamLogoContainer>
                <TeamLogoImg>B</TeamLogoImg>
            </TeamLogoContainer>
        </TeamContainer>
    </Container>
);
