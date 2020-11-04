import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router, Redirect} from "react-router-dom";

import {Exterior} from "../../exterior";
import {Shell} from "../../shell";

import {useAuth} from "../../services/auth.service";

const useStyles = makeStyles(theme => ({
    root: {
	  height: "100%",
	  width: "100%"
    }
}));  

export const AppRouter = () => {
    const classes = useStyles();
    const {user} = useAuth();

    return (
        <Grid className={classes.root} container justify="center" alignItems="center">
            {
                user ? <Router>
                    <Redirect exact from="/" to="/home" />
                    <Shell />	
                </Router>
                    : <Router>
                        <Redirect exact from="/" to="/login" />
                        <Exterior />
                    </Router>
            }
        </Grid>
    );
};