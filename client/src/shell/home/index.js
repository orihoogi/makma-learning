import React, { useEffect, useState } from "react";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {PhotoList} from "./photo-list";
import {PhotoTest} from "./photo-test";
import {useAlert, Alert} from "../../common/alert";
import {useHttp} from '../../services/http.service';

const useStyles = makeStyles((theme) => ({
    page: {
        flex: 1,
        padding: 16,
        height: '100%'
    }
}));

export const Home = () => {
    const classes = useStyles();
    const errorAlert = useAlert();
    const http = useHttp('photo');
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);

    useEffect(() => {
        http.get('left')
            .then(({data}) => setLeft(data))
            .catch(errorAlert.open);
        http.get('right')
            .then(({data}) => setRight(data))
            .catch(errorAlert.open);
    }, []);

    return (<>
        <Grid container direction="row" justify="space-between" alignItems="flex-start" className={classes.page}>
            <PhotoList side='left' photos={left} setPhotos={setLeft} />
            <PhotoTest />
            <PhotoList side='right' photos={right} setPhotos={setRight} />
        </Grid>
        <Alert alert={errorAlert} message="An error has occured" severity="error"></Alert>
    </>);
};