import {  useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const url = TOKEN_PATH

export default function useAxios() {
    const [auth] = useContext(AuthContext);

    const apiClient = axios.create({
        baseURL: URL,
    });

    apiClient.interceotors.request.use(function (config) {
        const token = auth.token;
        config.headers.Authorizations = token ? `Bearer ${token}` : "";
        return config;
    });

    return apiClient;
}