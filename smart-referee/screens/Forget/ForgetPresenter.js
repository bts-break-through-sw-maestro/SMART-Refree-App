import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { BORDER_COLOR, BUTTON_COLOR, BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-vertical: 10px;
    border: 1px solid ${BORDER_COLOR};
    width: 80%;
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ForgetInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    text-align: left;
    font-size: 16px;
`;

const SearchButtonContainer = styled.View`
    width: 80%;
    margin-top: 10px;
`;

const SearchButton = styled.TouchableOpacity`
    background-color: ${BUTTON_COLOR};
    justify-content: center;
    border-radius: 10px;
    width: 100%;
    height: 50px;
`;

const SearchButtonText = styled.Text`
    color: ${BG_COLOR};
    font-size: 16px;
    text-align: center;
`;

const ForgetPresenter = ({
    loading,
    emailInputTerm,
    onClickForgetButton,
    handleEmailInputUpdate
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <InputContainer>
                <ForgetInput
                    placeholder="가입시 사용한 E-mail을 입력하세요."
                    value={emailInputTerm}
                    onChangeText={handleEmailInputUpdate}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </InputContainer>
            <SearchButtonContainer>
                <SearchButton onPress={onClickForgetButton}>
                    <SearchButtonText>비밀번호 찾기</SearchButtonText>
                </SearchButton>
            </SearchButtonContainer>
        </Container>
    );

ForgetPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    emailInputTerm: PropTypes.string.isRequired,
    handleEmailInputUpdate: PropTypes.func.isRequired,
    onClickForgetButton: PropTypes.func.isRequired
};

export default ForgetPresenter;
