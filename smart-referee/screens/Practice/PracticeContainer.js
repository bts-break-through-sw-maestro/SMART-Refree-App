import React from "react";
import PracticePresenter from "./PracticePresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <PracticePresenter loading={loading} />;
    }
}
