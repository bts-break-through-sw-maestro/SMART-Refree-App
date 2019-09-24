import React from "react";
import TeamManagePresenter from "./TeamManagePresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <TeamManagePresenter loading={loading} />;
    }
}
