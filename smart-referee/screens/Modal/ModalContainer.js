import React from "react";
import ModalPresenter from "./ModalPresenter";

export default class extends React.Component {
    state = {
        loading: false
    };

    render() {
        const { loading } = this.state;
        return <ModalPresenter loading={loading} />;
    }
}
