import React from "react";
import TeamPresenter from "./TeamPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        hasTeam: true
    };

    render() {
        const { loading, hasTeam } = this.state;
        return <TeamPresenter loading={loading} hasTeam={hasTeam} />;
    }
}
