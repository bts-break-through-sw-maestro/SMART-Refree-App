import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";
import { Alert } from "react-native";

export default class extends React.Component {
    state = {
        loading: false,
        searchLoading: false,
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
        try {
            this.setState({ searchLoading: true });
            console.log("Searching...");
        } catch (e) {
            this.setState({ error: e });
        } finally {
            this.setState({ searchLoading: false });
            console.log("Searching Finish...");
        }
    };

    onClickJoinButton = key => {
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
            region
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
            />
        );
    }
}
