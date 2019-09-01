import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Game from "../../components/Game";
import styled from "styled-components";
import { BG_COLOR, BUTTON_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

const StatPlotContiner = styled.View`
    flex: 3;
    width: ${Layout.width - 60};
    align-items: center;
    justify-content: center;
`;

const StatPlotImageContainer = styled.View`
    width: 70%;
    height: 60%;
    justify-content: center;
    border: 1px solid ${TINT_COLOR};
`;

const StatPlotImg = styled.Text`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

const GameResultCotainer = styled.ScrollView`
    flex: 5;
`;

const MenuButtonContainer = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const MenuButton = styled.TouchableOpacity`
    background-color: ${BUTTON_COLOR};
    width: ${Layout.width - 60};
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const MenuButtonText = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${BG_COLOR};
`;

const HomePresenter = ({ loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <StatPlotContiner>
                <StatPlotImageContainer>
                    <StatPlotImg>User Stat Plot</StatPlotImg>
                </StatPlotImageContainer>
            </StatPlotContiner>
            <GameResultCotainer>
                <Game />
                <Game />
                <Game />
                <Game />
                <Game />
            </GameResultCotainer>

            <MenuButtonContainer>
                <MenuButton>
                    <MenuButtonText>Menu</MenuButtonText>
                </MenuButton>
            </MenuButtonContainer>
        </Container>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;
