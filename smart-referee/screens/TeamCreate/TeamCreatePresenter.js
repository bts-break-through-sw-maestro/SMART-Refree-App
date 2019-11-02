import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { Dropdown } from "react-native-material-dropdown";
import { Region } from "../../constants/Region";
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
    font-size: 20px;
    text-align: center;
`;

const PickerContainer = styled.View`
    margin-vertical: 10px;
    border: 1px solid ${BORDER_COLOR};
    width: 100%;
    height: 60px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const Picker = styled.View`
    padding-left: 5px;
    width: 100%;
    justify-content: center;
    padding-bottom: 5px;
`;

const TeamNameInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    text-align: left;
    font-size: 16px;
`;

const SearchButtonContainer = styled.View`
    width: 100%;
    padding: 0px 10px;
    margin-top: 20px;
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

const TeamCreatePresenter = ({
    loading,
    teamNameTerm,
    locationNameTerm,
    handleLocationNameUpdate,
    handleTeamNameUpdate,
    extractRegionData,
    onClickCreateButton,
    created,
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
                    <Picker>
                        <Dropdown
                            placeholder="지역을 선택하세요."
                            data={Region}
                            onChangeText={value => extractRegionData(value)}
                        />
                    </Picker>
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
                <SearchButton onPress={onClickCreateButton}>
                    <SearchButtonText>Create</SearchButtonText>
                </SearchButton>
            </SearchButtonContainer>
        </Container>
    );

TeamCreatePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    teamNameTerm: PropTypes.string.isRequired,
    locationNameTerm: PropTypes.string.isRequired,
    handleTeamNameUpdate: PropTypes.func.isRequired,
    handleLocationNameUpdate: PropTypes.func.isRequired,
    extractRegionData: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TeamCreatePresenter;
