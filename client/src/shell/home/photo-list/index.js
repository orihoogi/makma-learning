import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Grid } from '@material-ui/core';
import { ImagePicker } from 'react-file-picker';
import {useHttp} from '../../../services/http.service';
import {useAuth} from '../../../services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    overflow: 'auto'
  },
  left: {
    background: theme.palette.teamA.main,
    color: theme.palette.buttonColor
  },
  right: {
    background: theme.palette.teamB.main,
    color: theme.palette.buttonColor
  }
}));

export const PhotoList = ({photos, setPhotos, side}) => {
  const classes = useStyles();
  const {user} = useAuth();
  const http = useHttp('photo');

  return (
    <List dense className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <ImagePicker
          extensions={['jpg']}
          dims={{minWidth: 0, maxWidth: 40000, minHeight: 0, maxHeight: 40000}}
          onChange={file => {
            http.post('', {side, img: file, name: photos.length + 1})
              .then(() => setPhotos(photos => [...photos, `${photos.length + 1}.jpg`]));
          }}
          onError={errMsg => console.log(errMsg)}
        >
          <Button
            variant="contained"
            className={`${classes.button} ${side === 'left' ? classes.left : classes.right}`}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </ImagePicker>
        {photos.map(photo => (
          <ListItem key={photo} button>
            <Grid width="100%" container direction="row" justify="space-between">
              <img width="200x"
                src={`images/${user.username}/test/${side}/${photo}`}
              />
              <span>{photo}</span>
            </Grid>
          </ListItem>
          )
        )}
      </Grid>
    </List>
  );
};