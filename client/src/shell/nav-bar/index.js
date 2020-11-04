import React from "react";

import {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Toolbar, IconButton, Tooltip, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AvatarIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import DarkModeIcon from "@material-ui/icons/Brightness4";
import LightModeIcon from "@material-ui/icons/Brightness7";

import {ThemeContext} from "../../app/contexts/theme.context";
import {useAuth} from "../../services/auth.service";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}));  

export const NavBar = ({className, goTo, currentState, toggleDrawer}) => {
    const classes = useStyles();
    const {isDark, setIsDark} = useContext(ThemeContext);
    const {logout} = useAuth();

    const changeTheme = () => setIsDark(!isDark);

    return (
        <AppBar className={className} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {currentState}
                </Typography>
                <Tooltip title="Change theme">
                    <IconButton edge="start" color="inherit" aria-label="theme" onClick={changeTheme}>
                        {
                            isDark ? <LightModeIcon /> : <DarkModeIcon />
                        }
                    </IconButton>
                </Tooltip>
                <Tooltip title="Profile">
                    <IconButton edge="start" color="inherit" aria-label="profile" onClick={() => goTo({name: "Profile", url: "/profile"})}>
                        <AvatarIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Logout">
                    <IconButton edge="start" color="inherit" aria-label="logout" onClick={logout}>
                        <LogoutIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};