import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  left: {
    color: theme.palette.teamA.main
  },
  right: {
    color: theme.palette.teamB.main
  }
}));

const valuetext = (value) => {
  return `${value}%`;
}

export const TestResult = ({result = 50}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column" justify="center">
      <Slider
        className={result >= 50 ? classes.left : classes.right}
        valueLabelDisplay="on"
        valueLabelFormat={valuetext}
        defaultValue={result}
      />
    </Grid>
  );
}
