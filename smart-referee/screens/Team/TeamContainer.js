import React from "react";
import TeamPresenter from "./TeamPresenter";
import { guildApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: false,
        hasTeam: true,
        isMaster: true,
        memberList: null,
        guildInfo: null,
        error: null
    };

    async componentDidMount() {
        try {
            let memberList = await guildApi.memberList("팀 명", "지역");
            let guildInfo = await guildApi.myGuildInfo(1);

            console.log(memberList);
            console.log(guildInfo);

            this.setState({ memberList, guildInfo });
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
        const {
            loading,
            hasTeam,
            isMaster,
            error,
            memberList,
            guildInfo
        } = this.state;
        return (
            <TeamPresenter
                loading={loading}
                hasTeam={hasTeam}
                error={error}
                isMaster={isMaster}
                memberList={memberList}
                guildInfo={guildInfo}
            />
        );
    }
}
