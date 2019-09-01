import React from "react";
import ForgetPresenter from "./ForgetPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <ForgetPresenter loading={loading} />;
    }
}
