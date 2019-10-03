import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { BORDER_COLOR, BUTTON_COLOR, BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const SearchContainer = styled.View`
    width: 100%;
    align-items: flex-start;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
`;

const TextContainer = styled.View`
    width: 100px;
    border-bottom-width: 1px;
    border-bottom-color: ${BORDER_COLOR};
    padding-bottom: 5px;
`;

const PickerText = styled.Text`
    font-size: 16px;
    text-align: center;
`;

const PickerContainer = styled.View`
    margin-vertical: 10px;
    border: 1px solid ${BORDER_COLOR};
    width: 100%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const Picker = styled.Text`
    font-size: 12px;
`;

const TeamNameInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    text-align: left;
`;

const SearchButtonContainer = styled.View`
    width: 100%;
    padding: 0px 10px;
`;

const SearchButton = styled.TouchableOpacity`
    background-color: ${BUTTON_COLOR};
    justify-content: center;
    border-radius: 10px;
    width: 100%;
    height: 40px;
`;

const SearchButtonText = styled.Text`
    color: ${BG_COLOR};
    font-size: 16px;
    text-align: center;
`;

const ResultContainer = styled.View`
    flex: 6;
`;

const TeamSearchPresenter = ({
    loading,
    teamNameTerm,
    handleTeamNameUpdate,
    error
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <SearchContainer>
                <TextContainer>
                    <PickerText>지역</PickerText>
                </TextContainer>
                <PickerContainer>
                    <Picker>선택 드롭다운</Picker>
                </PickerContainer>
            </SearchContainer>
            <SearchContainer>
                <TextContainer>
                    <PickerText>시 군 구</PickerText>
                </TextContainer>
                <PickerContainer>
                    <Picker>선택 드롭다운</Picker>
                </PickerContainer>
            </SearchContainer>
            <SearchContainer>
                <TextContainer>
                    <PickerText>팀이름</PickerText>
                </TextContainer>
                <PickerContainer>
                    <TeamNameInput
                        placeholder="팀 이름을 입력하세요."
                        value={teamNameTerm}
                        onChangeText={handleTeamNameUpdate}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </PickerContainer>
            </SearchContainer>
            <SearchButtonContainer>
                <SearchButton>
                    <SearchButtonText>Search</SearchButtonText>
                </SearchButton>
            </SearchButtonContainer>
            <ResultContainer></ResultContainer>
        </Container>
    );

TeamSearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    teamNameTerm: PropTypes.string.isRequired,
    handleTeamNameUpdate: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TeamSearchPresenter;
