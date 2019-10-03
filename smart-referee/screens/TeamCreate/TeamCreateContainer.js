import React from "react";
import TeamCreatePresenter from "./TeamCreatePresenter";
import { Alert } from "react-native";

export default class extends React.Component {
    state = {
        loading: false,
        teamNameTerm: "",
        error: null
    };

    handleTeamNameUpdate = text => {
        console.log("Text");
        this.setState({ teamNameTerm: text });
    };

    onClickSearchButton = () => {
        Alert.alert("", "팀 생성 완료");
        // team Detail로 이동
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
