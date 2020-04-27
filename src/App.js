import React from 'react';
import './App.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import StartApp from './components/StartApp';
import ProgressBar from './components/ProgressBar';
import Offer from './offer/Offer';
import Need from './need/Need';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const palette = createMuiTheme({
  palette: {
    primary: {
      light: '#83e5e4',
      main: '#74cac9',
      dark: '#62adad',
      contrastText: '#000000',
    },
    secondary: {
      light: '#9797fa',
      main: '#8080ff',
      dark: '#6363fc',
      contrastText: '#ffffff',
    },
  },
});
const themeName = 'IndigoTheoryTheme';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  
  return (

    <div className={classes.root}>
      <ThemeProvider theme={palette}>
      <Router>
        {/* Progress Bar */}
        <Switch>
            <Route exact path="/">
              <ProgressBar
                progressAmount= '10'
              />
            </Route>
            <Route exact path="/home">
              <ProgressBar
                progressAmount= '10'
              />
            </Route>
            <Route path="/offer">
              <ProgressBar
                progressAmount= '20'
              />
            </Route>
            <Route path="/need">
              <ProgressBar
                progressAmount= '20'
              />
            </Route>
          </Switch>
        </Router>
        
        <Header/>

        <Router>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <StartApp/>
            </Route>
            <Route path="/home">
              <StartApp/>
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/need">
              <Need />
            </Route>
          </Switch>
        </Router>

      </ThemeProvider>
    </div>
  );
}