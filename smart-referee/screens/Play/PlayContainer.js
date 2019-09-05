import React from "react";
import PlayPresenter from "./PlayPresenter";
import * as Permissions from "expo-permissions";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            hasPermission: null
        };
    }

    componentDidMount = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);

        if (status === "granted") {
            this.setState({ hasPermission: true });
        } else {
            this.setState({ hasPermission: false });
        }
    };

    render() {
        const { hasPermission, loading } = this.state;

        return (
            <PlayPresenter loading={loading} hasPermission={hasPermission} />
        );
    }
}
