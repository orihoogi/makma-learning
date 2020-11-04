import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {PhotoList} from "./photo-list";
import {useAlert, Alert} from "../../common/alert";

const useStyles = makeStyles((theme) => ({
    page: {
        flex: 1,
        padding: 16
    }
}));

export const Home = () => {
    const classes = useStyles();
    const errorAlert = useAlert();

    return (
        <Grid container direction="row" justify="space-between" alignItems="center" className={classes.page}>
            <PhotoList photos={[]} />
            Hello
            <PhotoList photos={[]} />
            <Alert alert={errorAlert} message="An error has occured" severity="error"></Alert>
        </Grid>
    );
};