import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR, HEADER_COLOR } from "../../constants/Colors";
import { withNavigation } from "react-navigation";

const Container = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
`;

const MenuContainer = styled.View`
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: ${HEADER_COLOR};
`;

const MenuButton = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const MenuButtonText = styled.Text`
    font-size: 26px;
    font-weight: 400;
    color: ${TINT_COLOR};
`;

const MenuPresenter = ({ loading, navigation }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <MenuContainer>
                <MenuButton onPress={() => navigation.navigate("Play")}>
                    <MenuButtonText>Play</MenuButtonText>
                </MenuButton>
            </MenuContainer>
            <MenuContainer>
                <MenuButton onPress={() => navigation.navigate("Practice")}>
                    <MenuButtonText>Practice</MenuButtonText>
                </MenuButton>
            </MenuContainer>
            <MenuContainer>
                <MenuButton onPress={() => console.log("Menu 3 Clicked")}>
                    <MenuButtonText>Menu 3</MenuButtonText>
                </MenuButton>
            </MenuContainer>
            <MenuContainer>
                <MenuButton onPress={() => console.log("Menu 3 Clicked")}>
                    <MenuButtonText>Menu 4</MenuButtonText>
                </MenuButton>
            </MenuContainer>
            <MenuContainer>
                <MenuButton onPress={() => console.log("Menu 5 Clicked")}>
                    <MenuButtonText>Menu 5</MenuButtonText>
                </MenuButton>
            </MenuContainer>
        </Container>
    );

MenuPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default withNavigation(MenuPresenter);
