import React from "react";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components";
import Layout from "../constants/Layout";
import PropTypes from "prop-types";

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

const TeamInfoContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-horizontal: 7px;
`;

const TeamInfoTeamName = styled.Text`
    font-size: 20px;
    font-weight: 600;
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

const Game = ({ awayScore, awayGuildName, homeScore, homeGuildName }) => (
    <Container>
        <TeamContainer>
            <TeamInfoContainer>
                <TeamInfoTeamName>
                    {awayGuildName.length > 10
                        ? `${awayGuildName.substring(0, 9)}...`
                        : awayGuildName}
                </TeamInfoTeamName>
                <GameScore>{awayScore}</GameScore>
            </TeamInfoContainer>
        </TeamContainer>
        <VsTextContainer>
            <VsText>VS</VsText>
        </VsTextContainer>
        <TeamContainer>
            <TeamInfoContainer>
                <TeamInfoTeamName>
                    {homeGuildName.length > 10
                        ? `${homeGuildName.substring(0, 9)}...`
                        : homeGuildName}
                </TeamInfoTeamName>
                <GameScore>{homeScore}</GameScore>
            </TeamInfoContainer>
        </TeamContainer>
    </Container>
);

Game.propsType = {
    awayGuildName: PropTypes.string.isRequired,
    awayScore: PropTypes.number.isRequired,
    homeGuildName: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired
};

export default Game;
