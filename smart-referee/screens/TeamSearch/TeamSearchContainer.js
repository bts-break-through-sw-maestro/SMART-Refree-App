import React from "react";
import TeamSearchPresenter from "./TeamSearchPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        error: null
    };

    async componentDidMount() {
        try {
        } catch {
            this.setState({
                error: "Can't get Team information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { loading, error } = this.state;
        return <TeamSearchPresenter loading={loading} error={error} />;
    }
}
