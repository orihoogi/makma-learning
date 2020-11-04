import axios from "axios";

import {useAuth} from "./auth.service";

const baseUrl = "http://localhost:5000/api";

export const useResource = url => {
    const fullUrl = `${baseUrl}/${url}`;
    const {user} = useAuth();

    axios.defaults.headers.common["Authorization"] = user?.token;

    return {
        get: () => axios.get(fullUrl),
        put: item => axios.put(fullUrl, item),
        post: item => axios.post(fullUrl, item),
        delete: id => axios.delete(fullUrl, id)
    }
};