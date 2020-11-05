import React from "react";

import {useState} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {orange, blue, deepOrange, deepPurple, grey, blueGrey, red, green} from "@material-ui/core/colors";

import {AppRouter} from "./router";

import {ThemeContext} from "./contexts/theme.context";
import {ProvideAuth} from "../services/auth.service";

export const App = () => {
    const [isDark, setIsDark] = useState(false);
    const palletType = isDark ? "dark" : "light";
    const buttonColor = isDark ? "#000" : "#fff";
    const backgroundColor = isDark ? grey[900] : blueGrey[50];
    const mainPrimaryColor = isDark ? orange[500] : blue[500];
    const mainSecondaryColor = isDark ? deepOrange[900] : deepPurple[500];

    const theme = createMuiTheme({
        palette: {
            type: palletType,
            buttonColor: buttonColor,
            background: {
                default: backgroundColor
            },
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            },
            teamA: {
                main: red[500]
            },
            teamB: {
                main: green[500]
            }
        }
    });

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <ThemeProvider theme={theme}>  
                <ProvideAuth>
                    <CssBaseline />
                    <AppRouter />
                </ProvideAuth>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};