import axios from "axios";

import {useAuth} from "./auth.service";

const baseUrl = "http://localhost:5000/api";

export const useHttp = url => {
    const fullUrl = `${baseUrl}/${url}`;
    const {user} = useAuth();

    axios.defaults.headers.common["Authorization"] = user?.token;

    return {
        get: url => axios.get(`${fullUrl}/${url}`),
        put: (url, item) => axios.put(`${fullUrl}/${url}`, item),
        post: (url, item) => axios.post(`${fullUrl}/${url}`, item),
        delete: (url, id) => axios.delete(`${fullUrl}/${url}`, id)
    }
};