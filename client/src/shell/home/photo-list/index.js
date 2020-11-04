import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const PhotoList = ({photos}) => {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      <Grid container direction="column" alignItems="center">
      {photos.map(photo => (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                src={photo.src}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={photo.src} />
          </ListItem>
        )
      )}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      </Grid>
    </List>
  );
};