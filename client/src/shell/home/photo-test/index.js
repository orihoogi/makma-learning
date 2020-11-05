import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@material-ui/icons/Check';
import { Grid } from '@material-ui/core';
import { ImagePicker } from 'react-file-picker';
import {useHttp} from '../../../services/http.service';
import {useAuth} from '../../../services/auth.service';
import {TestResult} from './test-result';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 3,
    minHeight: 400,
  },
  image: {
    maxHeight: '300px'
  }
}));

export const PhotoTest = () => {
  const [uploaded, setUploaded] = useState(false);
  const [result, setResult] = useState();
  const classes = useStyles();
  const {user} = useAuth();
  const http = useHttp('photo/test');

  return (
      <Grid className={classes.root} container direction="column" justify="space-between" alignItems="center">
        {!uploaded ? <ImagePicker
          extensions={['jpg']}
          dims={{minWidth: 0, maxWidth: 40000, minHeight: 0, maxHeight: 40000}}
          onChange={file => http.post('', {img: file}).then(() => setUploaded(true))}
          onError={errMsg => console.log(errMsg)}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </ImagePicker> : <><img className={classes.image} src={`images/${user.username}/test.jpg`} />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => http.get('').then(({data}) => setResult(data.left))}
          startIcon={<CheckIcon />}
        >
          Test
        </Button></>}
        {result ? <TestResult /> : <></>}
      </Grid>
  );
};