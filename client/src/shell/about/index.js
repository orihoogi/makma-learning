import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  page: {
    flex: 1,
    padding: 16
  }
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.page}>
      <Card className={classes.root}>
        <CardHeader
          title="We are Team 5!"
          subheader="Developed with love: Shir Maggen, Omri Natanson, Liel Tal, May Eliyahu and Ori Hoogi."
        />
        <CardMedia
          className={classes.media}
          image="/static/about.jpeg"
        />
      </Card>
    </Grid>
  );
}
