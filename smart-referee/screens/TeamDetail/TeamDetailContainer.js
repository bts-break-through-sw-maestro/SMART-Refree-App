import React from "react";
import TeamDetailPresenter from "./TeamDetailPresenter";

export default class extends React.Component {
    state = {
        loading: false,
        user: null
    };

    async componentDidMount() {
        const user = {
            name: "김타자",
            email: "alstn2468_@naver.com",
            position: "투수",
            teamName: "삼성 라이온즈",
            inning: 10.2,
            strikeOut: 100,
            hits: 50,
            homeRuns: 0,
            isPitcher: true,
            doubles: 0,
            triples: 0,
            isMaster: false
        };

        try {
            this.setState({ loading: true });
        } catch {
        } finally {
            this.setState({ loading: false, user });
        }
    }

    render() {
        const { loading, user } = this.state;

        return <TeamDetailPresenter loading={loading} user={user} />;
    }
}
