import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { BUTTON_COLOR, BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import { withNavigation } from "react-navigation";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const LogoImageContainer = styled.View`
    width: ${Layout.width / 2};
    height: ${Layout.height / 3.5};
    justify-content: center;
    align-items: center;
    border: 2px solid ${TINT_COLOR};
`;

const LoginInputContainer = styled.View`
    width: ${Layout.width / 2};
    height: ${Layout.height / 3.5};
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    border-bottom-width: 2px;
    border-bottom-color: ${TINT_COLOR};
    margin-bottom: 5px;
`;

const Input = styled.TextInput`
    width: ${Layout.width / 1.6};
    border-radius: 20px;
    padding: 10px;
    text-align: left;
`;

const ButtonContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

const LoginButtonContainer = styled.TouchableOpacity`
    background-color: ${BUTTON_COLOR};
    margin-horizontal: 30px;
    padding: 10px 60px;
    border-radius: 10px;
`;

const LoginButton = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${BG_COLOR};
`;

const AccountButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
`;

const AccountButton = styled.TouchableOpacity``;

const AccountButtonText = styled.Text`
    font-size: 15px;
    padding: 0px 5px;
    font-weight: 600;
`;

const Bar = styled.Text`
    font-size: 15px;
    font-weight: 600;
`;

const LoginPresenter = ({ loading, navigation }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <LogoImageContainer>
                <Text>Logo</Text>
            </LogoImageContainer>

            <LoginInputContainer>
                <InputContainer>
                    <Input placeholder="Username or E-mail" />
                </InputContainer>
                <InputContainer>
                    <Input placeholder="Password" />
                </InputContainer>
            </LoginInputContainer>

            <ButtonContainer>
                <LoginButtonContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <LoginButton>Login</LoginButton>
                </LoginButtonContainer>

                <AccountButtonContainer>
                    <AccountButton>
                        <AccountButtonText
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            Sign Up
                        </AccountButtonText>
                    </AccountButton>

                    <Bar> | </Bar>

                    <AccountButton
                        onPress={() => navigation.navigate("Forget")}
                    >
                        <AccountButtonText>Forget</AccountButtonText>
                    </AccountButton>
                </AccountButtonContainer>
            </ButtonContainer>
        </Container>
    );

LoginPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default withNavigation(LoginPresenter);
