import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {useAlert, Alert} from "../../common/alert";

const useStyles = makeStyles((theme) => ({
    page: {
        flex: 1,
        padding: 16
    }
}));

export const Inbox = () => {
    const classes = useStyles();
    const errorAlert = useAlert();

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.page}>
            Hello
            <Alert alert={errorAlert} message="An error has occured" severity="error"></Alert>
        </Grid>
    );
};