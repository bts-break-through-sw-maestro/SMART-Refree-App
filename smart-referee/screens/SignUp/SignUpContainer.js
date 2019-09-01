import React from "react";
import SignUpPresenter from "./SignUpPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <SignUpPresenter loading={loading} />;
    }
}
