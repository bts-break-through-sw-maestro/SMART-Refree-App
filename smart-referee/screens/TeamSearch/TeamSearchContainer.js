import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        searchLoading: false,
        teamNameTerm: "",
        error: null
    };

    handleTeamNameUpdate = text => {
        this.setState({ teamNameTerm: text });
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

    onClickJoinButton = ({ key }) => {
        console.log(`Join ${key} team`);
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
        const { loading, error, teamNameTerm, searchLoading } = this.state;
        return (
            <TeamSearchPresenter
                loading={loading}
                searchLoading={searchLoading}
                error={error}
                teamNameTerm={teamNameTerm}
                handleTeamNameUpdate={this.handleTeamNameUpdate}
                onClickSearchButton={this.onClickSearchButton}
                onClickJoinButton={this.onClickJoinButton}
            />
        );
    }
}
