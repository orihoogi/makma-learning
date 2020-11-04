import React from "react";

import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Drawer, List, ListItem, ListItemText, ListItemIcon} from "@material-ui/core";
import {Switch, Route} from "react-router-dom";
import AboutIcon from "@material-ui/icons/Info";
import {useHistory, Redirect} from "react-router-dom";
import classNames from "classnames";

import {NavBar} from "./nav-bar";
import {states} from "./states";

import {useAuth} from "../services/auth.service";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%"
    },
    content: {
        flex: 1,
        width: "100%",
        background: "none",
        overflow: "auto"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    }
}));  

export const Shell = () => {
    const {user} = useAuth();
    const classes = useStyles();
    const [currentState, setCurrentState] = useState("Inbox");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const history = useHistory();

    const goTo = state => {
        history.push(state.url);
        setCurrentState(state.name);
    };

    const toggleDrawer = () => setIsDrawerOpen(isDrawerOpen => !isDrawerOpen);

    return (user ? 
        <Grid className={classes.root} spacing={2} container direction="column" justify="center" alignItems="center">
            <NavBar className={isDrawerOpen ? classes.appBarShift : ""} goTo={goTo} toggleDrawer={toggleDrawer} currentState={currentState} />
            <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant="persistent" anchor="left" open={isDrawerOpen}>
                <List>
                    {
                        states.map(state => (
                            <ListItem button key={state.name} onClick={() => goTo(state)}>
                                <ListItemIcon><state.icon /></ListItemIcon>
                                <ListItemText primary={state.name} />
                            </ListItem>
                        ))
                    }
                    <ListItem button key="About" onClick={() => goTo({name: "About", url: "/about"})}>
                        <ListItemIcon><AboutIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Drawer>
            <Grid className={classNames({
                [classes.appBarShift]: isDrawerOpen,
                [classes.content]: true
            })} item>
                <Switch>
                    {
                        states.map(x => 
                            <Route key={x.name} path={x.url}>
                                <x.component />
                            </Route>
                        )
                    }
                </Switch>
            </Grid>
        </Grid> : 
        <Redirect to="/login" />
    );
};