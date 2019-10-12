import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Game from "../../components/Game";
import styled from "styled-components";
import { BG_COLOR, BUTTON_COLOR, TINT_COLOR } from "../../constants/Colors";
import { withNavigation } from "react-navigation";
import Layout from "../../constants/Layout";

const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${BG_COLOR};
`;

const MainPageLogoImageContainer = styled.View`
    flex: 3;
    width: ${Layout.width - 60};
    align-items: center;
    justify-content: center;
`;

const LogoImageContainer = styled.View`
    width: 70%;
    height: 60%;
    justify-content: center;
    border: 1px solid ${TINT_COLOR};
`;

const LogoImage = styled.Text`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

const GameResultContainer = styled.ScrollView`
    flex: 5;
`;

const CenterViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
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

const NoGameText = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${BG_COLOR};
`;

const HomePresenter = ({ loading, navigation, error, gameList }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <MainPageLogoImageContainer>
                <LogoImageContainer>
                    <LogoImage>Img</LogoImage>
                </LogoImageContainer>
            </MainPageLogoImageContainer>
            <GameResultContainer showsVerticalScrollIndicator={false}>
                <CenterViewContainer>
                    {gameList.length != 0 ? (
                        gameList.map((data, idx) => (
                            <Game
                                key={idx}
                                awayScore={data.awayScore}
                                homeScore={data.homeScore}
                                awayGuildName={
                                    data.guildByAwayGuildId.guildName
                                }
                                homeGuildName={
                                    data.guildByHomeGuildId.guildName
                                }
                            />
                        ))
                    ) : (
                        <NoGameText>경기 정보가 없습니다.</NoGameText>
                    )}
                </CenterViewContainer>
            </GameResultContainer>
            <MenuButtonContainer>
                <MenuButton onPress={() => navigation.navigate("Menu")}>
                    <MenuButtonText>Menu</MenuButtonText>
                </MenuButton>
            </MenuButtonContainer>
        </Container>
    );

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    gameList: PropTypes.array
};

export default withNavigation(HomePresenter);
