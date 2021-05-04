import {  useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { API } from "../../constants/api";

const url = API;

export default function useAxios() {
    const [auth] = useContext(AuthContext);

    const apiClient = axios.create({
        baseURL: url,
    });

    apiClient.interceotors.request.use(function (config) {
        const token = auth.token;
        config.headers.Authorizations = token ? `Bearer ${token}` : "";
        return config;
    });

    return apiClient;
}