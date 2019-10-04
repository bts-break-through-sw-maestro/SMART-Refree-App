import axios from "axios";

const api = axios.create({
    baseURL: "sampleurl"
});

export const userApi = {
    getUser: email => api.get(`accountses/${email}`)
};

export const teamApi = {};
