import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";

export default class extends React.Component {
    state = {
        loading: false,
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
        const { loading, error, teamNameTerm } = this.state;
        return (
            <TeamSearchPresenter
                loading={loading}
                error={error}
                teamNameTerm={teamNameTerm}
                handleTeamNameUpdate={this.handleTeamNameUpdate}
            />
        );
    }
}
