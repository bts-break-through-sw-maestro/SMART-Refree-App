import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import { BORDER_COLOR, BUTTON_COLOR, BG_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { Dropdown } from "react-native-material-dropdown";
import { Region } from "../../constants/Region";

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

const Picker = styled.View`
    padding-left: 5px;
    width: 100%;
    justify-content: center;
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
    display: flex;
    width: 100%;
    padding-top: 10px;
`;

const ResultScrollView = styled.ScrollView``;

const CenterViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const TeamInfoContainer = styled.View`
    width: ${Layout.width - 20};
    height: 60px;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    flex-direction: row;
    align-items: center;
`;

const TeamNameText = styled.Text`
    font-size: 24px;
    flex: 2;
    text-align: center;
`;

const DetailContainer = styled.View`
    flex-direction: column;
    flex: 2;
`;

const TeamRecordText = styled.Text``;

const TeamMemberCountText = styled.Text``;

const TeamJoinButtonContainer = styled.View`
    flex: 1;
`;

const TeamJoinButton = styled.TouchableOpacity`
    background-color: ${BUTTON_COLOR};
    justify-content: center;
    border-radius: 10px;
    width: 100%;
    height: 40px;
`;

const TeamJoinButtonText = styled.Text`
    color: ${BG_COLOR};
    font-size: 16px;
    text-align: center;
`;

var dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TeamSearchPresenter = ({
    loading,
    searchLoading,
    teamNameTerm,
    locationNameTerm,
    region,
    handleTeamNameUpdate,
    handleLocationNameUpdate,
    onClickSearchButton,
    onClickJoinButton,
    extractRegionData,
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
                    <PickerText>시 군 구</PickerText>
                </TextContainer>
                <PickerContainer>
                    <TeamNameInput
                        placeholder="시 군 구 정보를 입력하세요."
                        value={locationNameTerm}
                        onChangeText={handleLocationNameUpdate}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
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
                <SearchButton onPress={onClickSearchButton}>
                    <SearchButtonText>Search</SearchButtonText>
                </SearchButton>
            </SearchButtonContainer>
            <ResultContainer>
                <SearchContainer>
                    <TextContainer>
                        <PickerText>검색 결과</PickerText>
                    </TextContainer>
                </SearchContainer>
                {searchLoading ? (
                    <Loader />
                ) : (
                    <ResultScrollView>
                        <CenterViewContainer>
                            {dummy.map(idx => (
                                <TeamInfoContainer key={idx}>
                                    <TeamNameText>팀이름{idx}</TeamNameText>
                                    <DetailContainer>
                                        <TeamMemberCountText>
                                            총 인원 : 30명
                                        </TeamMemberCountText>
                                        <TeamRecordText>
                                            0승 0패 0무
                                        </TeamRecordText>
                                    </DetailContainer>
                                    <TeamJoinButtonContainer>
                                        <TeamJoinButton
                                            onPress={() =>
                                                onClickJoinButton(idx)
                                            }
                                        >
                                            <TeamJoinButtonText>
                                                가입
                                            </TeamJoinButtonText>
                                        </TeamJoinButton>
                                    </TeamJoinButtonContainer>
                                </TeamInfoContainer>
                            ))}
                        </CenterViewContainer>
                    </ResultScrollView>
                )}
            </ResultContainer>
        </Container>
    );

TeamSearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    searchLoading: PropTypes.bool.isRequired,
    teamNameTerm: PropTypes.string.isRequired,
    locationNameTerm: PropTypes.string.isRequired,
    region: PropTypes.string,
    handleTeamNameUpdate: PropTypes.func.isRequired,
    handleLocationNameUpdate: PropTypes.func.isRequired,
    onClickSearchButton: PropTypes.func.isRequired,
    onClickJoinButton: PropTypes.func.isRequired,
    extractRegionData: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TeamSearchPresenter;
