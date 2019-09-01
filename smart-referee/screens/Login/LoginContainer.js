import React from "react";
import LoginPresenter from "./LoginPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <LoginPresenter loading={loading} />;
    }
}
