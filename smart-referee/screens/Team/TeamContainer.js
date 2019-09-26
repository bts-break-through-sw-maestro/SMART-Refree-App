import React from "react";
import TeamPresenter from "./TeamPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        hasTeam: false,
        isMaster: true,
        error: null
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
        const { loading, hasTeam, isMaster, error } = this.state;
        return (
            <TeamPresenter
                loading={loading}
                hasTeam={hasTeam}
                error={error}
                isMaster={isMaster}
            />
        );
    }
}
