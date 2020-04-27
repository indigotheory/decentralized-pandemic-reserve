import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
    root: {
      height: '1em',
      backgroundColor: lighten('#8080ff', 0.8),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#8080ff',
    },
  })(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(3),
    },
  }));

  export default function CustomizedProgressBars() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <BorderLinearProgress
          className={classes.margin}
          variant="determinate"
          color="secondary"
          value={10}
        />
      </div>
    );
  }