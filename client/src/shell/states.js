import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";

import {Home} from "./home";
import {About} from "./about";

export const states = [
    {
        name: "Home",
        url: "/home",
        icon: HomeIcon,
        component: Home
    },
    {
        name: "About",
        url: "/about",
        icon: AboutIcon,
        component: About
    }
];