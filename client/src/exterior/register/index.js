import React from "react";

import {useForm} from "react-hook-form";
import {Grid} from "@material-ui/core";
import {Card, CardContent, CardActions} from "@material-ui/core";
import {Typography, TextField, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import {useAuth} from "../../services/auth.service";
import {Alert, useAlert} from "../../common/alert";

export const Register = () => {
    const auth = useAuth();
    const errorAlert = useAlert();
    const {register, handleSubmit} = useForm();

    const submit = async ({username, password, firstname, lastname, email}) => {
        try {
            await auth.register({username, password, firstname, lastname, email});
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
                                Register
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField label="First Name" name="firstname" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                        <Grid item>
                            <TextField label="Last Name" name="lastname" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                        <Grid item>
                            <TextField label="Username" name="username" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                        <Grid item>
                            <TextField label="Email" name="email" type="email" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                        <Grid item>
                            <TextField label="Password" name="password" type="password" color="primary" variant="outlined" inputRef={register({ required: true })} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Link to="/login">
                                <Button color="primary">Login</Button>
                            </Link>
                        </Grid>  
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">Register</Button>
                        </Grid>  
                    </Grid>
                </CardActions>
            </Card>
            <Alert alert={errorAlert} message="An error has occured" severity="error"></Alert>
        </form>
    );
};