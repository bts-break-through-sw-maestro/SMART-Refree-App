import axios from "axios";
import { URL } from "./url";

const api = axios.create({
    baseURL: URL
});

api.defaults.headers.post["Content-Type"] = "application/json";

export const accountApi = {
    /* Method      : GET
     * Parameter   : code [로그인시 생성]
     * Description : KaKao 로그인 API */
    kakaoLoginApi: code => api.get(code),

    /* Method      : POST
     * Parameter   : phoneNumber [휴대폰 번호]
     * Description : 전화번호로 계정 찾기 API */
    findAccountId: phoneNumber => api.post("account/find/id", { phoneNumber }),

    /* Method      : DELETE
     * Parameter   : null
     * Description : KaKao 로그아웃 API */
    logout: () => api.delete("account/logout"),

    /* Method      : PUT
     * Parameter   : {"position": "position"}
     * Description : 포지션 설정 API */
    setAccountPosition: position =>
        api.delete("account/personal-info", { position }),

    /* Method      : POST
     * Parameter   : phoneNumber [휴대폰 번호]
     * Description : 전화번호 설정 API */
    setAccountPhoneNumber: phoneNumber =>
        api.post("account/personal-info/settings", { phoneNumber }),

    /* Method      : GET
     * Parameter   : accountId [account 테이블 인덱스]
     * Description : 계정 정보 반환 API */
    getAccountInfo: accountId => api.get(`account/personal-info/${accountId}`)
};

export const gameApi = {
    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스]
     * Description : 경기 리스트 반환 API */
    getMyTeamGameMatchList: teamId => api.get(`game/list/${teamId}`)
};

export const teamApi = {
    /* Method      : POST
     * Parameter   : region [지역], teamName [팀명]
     * Description : 팀 생성 API */
    createMyTeam: (region, teamName) =>
        api.post(`team/create`, { region, teamName }),

    /* Method      : GET
     * Parameter   : accountId [account 테이블 인덱스]
     * Description : 팀 정보 반환 API */
    myTeamInfo: accountId => api.get(`team/myteam/info/${accountId}`),

    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스]
     * Description : 팀 가입 신청서 반환 API */
    getApplicationList: teamId =>
        api.get(`team/myteam/manage/application/${teamId}`),

    /* Method      : PUT
     * Parameter   : accountId [account 테이블 인덱스]
     * Description : 팀원 방출 API */
    dropMember: accountId => api.put(`team/myteam/manage/${accountId}/drop`),

    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스]
     * Description : 팀원 리스트 반환 API */
    myTeamMemberList: teamId => api.get(`team/myteam/members?id=${teamId}`),

    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스], accountId [account 테이블 인덱스]
     * Description : 팀원 상세 정보 반환 API */
    myTeamMemberInfo: (teamId, accountId) =>
        api.get(`team/myteam/member/${teamId}?account=${accountId}`),

    /* Method      : PUT
     * Parameter   : teamId [team 테이블 인덱스]
     * Description : 팀 이름, 지역 검색 API */
    reportApplicationForm: teamId =>
        api.put(`team/search/application/report`, { id: teamId }),

    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스]
     * Description : 팀 상세 정보 API */
    teamInfo: teamId => api.get(`team/search/info/${teamId}`),

    /* Method      : GET
     * Parameter   : teamName [팀명], region[지역]
     * Description : 팀 가입 멤버 리스트 반환 API */
    memberList: (teamName, region) =>
        api.get(`team/search/members?name=${teamName}&region=${region}`),

    /* Method      : GET
     * Parameter   : teamId [team 테이블 인덱스], accountId [account 테이블 인덱스]
     * Description : 팀 맴버 상세 정보 반환 API */
    memberInfo: (teamId, accountId) =>
        api.get(`team/search/member/${teamId}?account=${accountId}`),

    /* Method      : GET
     * Parameter   : teamName [팀명]
     * Description : 팀 이름 검색 API */
    getTeamListByTeamName: teamName => api.get(`team/search/name/${teamName}`),

    /* Method      : GET
     * Parameter   : region [지역]
     * Description : 팀 지역 검색 API */
    getTeamListByRegion: region => api.get(`team/search/region${region}`)
};
