import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {Switch, Route, useRouteMatch} from "react-router-dom";
  
import {Register} from "./register";
import {Login} from "./login";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        width: "100%"
    }
}));  

export const Exterior = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} spacing={2} container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
};