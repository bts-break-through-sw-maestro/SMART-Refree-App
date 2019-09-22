import React from "react";
import TeamDetailPresenter from "./TeamDetailPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <TeamDetailPresenter loading={loading} />;
    }
}
