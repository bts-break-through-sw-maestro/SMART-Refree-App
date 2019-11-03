import React from "react";
import TeamCreatePresenter from "./TeamCreatePresenter";
import { Alert } from "react-native";
import { guildApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: false,
        teamNameTerm: "",
        locationNameTerm: "",
        region: "",
        error: null
    };

    handleTeamNameUpdate = text => {
        this.setState({ teamNameTerm: text });
        console.log("Team Name :", text);
    };

    handleLocationNameUpdate = text => {
        this.setState({ locationNameTerm: text });
        console.log("Location Name :", text);
    };

    onClickSearchButton = () => {
        const { teamNameTerm: teamName } = this.state;
        Alert.alert("", `${teamName} 팀 생성 완료`);
    };

    extractRegionData = region => {
        this.setState({ region });
        console.log("Region", region);
    };

    async componentDidMount() {
        try {
        } catch {
            this.setState({
                error: "Can't get Team information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    onClickCreateButton = async () => {
        const { region, teamName } = this.state;
        let created = await guildApi.createMyGuild(region, teamName);

        if (created) {
            Alert.alert("팀 생성 완료");
        } else {
            Alert.alert("팀 생성 실패");
        }
    };

    render() {
        const {
            loading,
            error,
            teamNameTerm,
            locationNameTerm,
            created
        } = this.state;

        return (
            <TeamCreatePresenter
                loading={loading}
                error={error}
                teamNameTerm={teamNameTerm}
                locationNameTerm={locationNameTerm}
                handleTeamNameUpdate={this.handleTeamNameUpdate}
                handleLocationNameUpdate={this.handleLocationNameUpdate}
                onClickSearchButton={this.onClickSearchButton}
                extractRegionData={this.extractRegionData}
                created={created}
                _CreateButtonOnclick={this.onClickCreateButton}
            />
        );
    }
}
