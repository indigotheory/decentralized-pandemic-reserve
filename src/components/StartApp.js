import React from 'react';
import './StartApp.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContent: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '50vh',
  },
  offerContainer: {
    borderRight: 'solid 1px #000000',
    textAlign: 'center',
  },
  needContainer: {
    textAlign: 'center',
  },
}));

export default function FixedContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="sm"  spacing={6} style={{ backgroundColor: '#ffffff', height: '100vh', padding: '2em' }} >

        <Grid container spacing={3}>
          <Grid item xs={6} className={classes.offerContainer}>
            <Button variant="contained" color="primary">
              I Can Offer
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.needContainer}>
            <Button variant="contained" color="primary">
              I Need
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}