import axios from "axios";
import { URL } from "./url";

const api = axios.create({
    baseURL: URL
});

api.defaults.headers.post["Content-Type"] = "application/json";

export const accountApi = {
    findEmail: phoneNumber => api.post("account/find/id", { phoneNumber })
};

export const gameApi = {};

export const teamApi = {};
