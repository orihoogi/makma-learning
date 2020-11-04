import React from "react";

import {useForm} from "react-hook-form";
import {Grid} from "@material-ui/core";
import {Card, CardContent, CardActions} from "@material-ui/core";
import {Typography, TextField, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import {useAuth} from "../../services/auth.service";
import {Alert, useAlert} from "../../common/alert";

export const Login = () => {
    const {login} = useAuth();
    const errorAlert = useAlert();
    const {register, handleSubmit} = useForm();

    const submit = async ({username, password}) => {
        try {
            await login({username, password});
        } catch (error) {
            errorAlert.open();
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Card>
                <CardContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography align="center" variant="h5">
                                Login
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField name="username" label="Username" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                        <Grid item>
                            <TextField name="password" label="Password" type="password" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Link to="/register">
                                <Button color="primary">Register</Button>
                            </Link>
                        </Grid>  
                        <Grid item>
                            <Button variant="contained" type="submit" color="primary">Login</Button>
                        </Grid>  
                    </Grid>
                </CardActions>
            </Card>
            <Alert alert={errorAlert} message="An error has occured" severity="error"></Alert>
        </form>
    );
};