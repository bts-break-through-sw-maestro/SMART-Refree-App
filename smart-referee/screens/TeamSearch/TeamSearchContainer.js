import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        searchLoading: true,
        teamNameTerm: "",
        error: null
    };

    handleTeamNameUpdate = text => {
        this.setState({ teamNameTerm: text });
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
            />
        );
    }
}
