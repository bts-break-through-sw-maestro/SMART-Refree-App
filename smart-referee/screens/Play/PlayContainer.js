import React from "react";
import PlayPresenter from "./PlayPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <PlayPresenter loading={loading} />;
    }
}
