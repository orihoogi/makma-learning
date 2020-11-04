import React from "react";

import {useState, useContext, createContext} from "react";
import axios from "axios";

const UserContext = createContext();

export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth(sessionStorage.user && JSON.parse(sessionStorage.user));

    return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

const baseUrl = "http://localhost:5000/auth";

const useProvideAuth = () => {
    const [user, setUser] = useState(sessionStorage.user && JSON.parse(sessionStorage.user));

    const sign = async (user, path) => {
        const {data} = await axios.post(`${baseUrl}/${path}`, user);
        sessionStorage.user = JSON.stringify(data);
        setUser(data);
    }

    return {
        login: async user => await sign(user, "signin"),
        register: async user => await sign(user, "signup"),
        logout: () => {
            delete sessionStorage.user;
            setUser(null);
        },
        user
    };
};

export const useAuth = () => useContext(UserContext);