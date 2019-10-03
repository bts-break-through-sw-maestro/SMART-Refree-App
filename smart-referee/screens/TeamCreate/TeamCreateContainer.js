import React from "react";
import TeamCreatePresenter from "./TeamCreatePresenter";

export default class extends React.Component {
    state = {
        loading: false,
        teamNameTerm: "",
        error: null
    };

    handleTeamNameUpdate = text => {
        this.setState({ teamNameTerm: text });
    };

    onClickSearchButton = () => {
        console.log("Create");
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
            <TeamCreatePresenter
                loading={loading}
                error={error}
                teamNameTerm={teamNameTerm}
                handleTeamNameUpdate={this.handleTeamNameUpdate}
                onClickSearchButton={this.onClickSearchButton}
            />
        );
    }
}
