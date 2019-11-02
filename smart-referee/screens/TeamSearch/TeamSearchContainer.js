import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";
import { Alert } from "react-native";
import { guildApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: false,
        searchLoading: false,
        teamNameTerm: "",
        locationNameTerm: "",
        region: "",
        error: null,
        teamList: null
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
        try {
            const {
                region,
                teamNameTerm: teamName,
                locationNameTerm: location
            } = this.state;

            this.setState({ searchLoading: true });
            console.log("Searching...", region, teamName, location);

            let teamList = await guildApi.getGuildListByGuildName(teamName);
            teamList = await teamList.assign(guildApi.getGuildListByRegion(region));

            console.log(teamList)

            this.setState({ teamList });
        } catch (e) {
            this.setState({ error: e });
        } finally {
            this.setState({ searchLoading: false });
            console.log("Searching Finish...");
        }
    };

    onClickJoinButton = key => {
        await guildApi.reportApplicationForm(key);
        Alert.alert("", `${key} 가입 신청 완료`);
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

    render() {
        const {
            loading,
            error,
            teamNameTerm,
            locationNameTerm,
            searchLoading,
            region,
            teamList
        } = this.state;

        return (
            <TeamSearchPresenter
                loading={loading}
                searchLoading={searchLoading}
                error={error}
                teamNameTerm={teamNameTerm}
                locationNameTerm={locationNameTerm}
                handleTeamNameUpdate={this.handleTeamNameUpdate}
                handleLocationNameUpdate={this.handleLocationNameUpdate}
                onClickSearchButton={this.onClickSearchButton}
                onClickJoinButton={this.onClickJoinButton}
                region={region}
                extractRegionData={this.extractRegionData}
                teamList={teamList}
            />
        );
    }
}
