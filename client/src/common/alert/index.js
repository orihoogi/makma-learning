import React from "react";

import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    alert: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        }    
    }
}));

export const useAlert = () => {
    const [open, setOpen] = useState(false);

    return {
        isOpen: open,
        open: () => setOpen(true),
        close: () => setOpen(false)
    };
};

export const Alert = ({alert, message, severity}) => {
    const classes = useStyles();

    return (
        <Snackbar className={classes.alert} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={alert.isOpen} onClose={alert.close} autoHideDuration={5000}>
            <MuiAlert variant="filled" severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};