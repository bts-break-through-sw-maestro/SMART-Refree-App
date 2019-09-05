import React from "react";
import TeamPresenter from "./TeamPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <TeamPresenter loading={loading} />;
    }
}
