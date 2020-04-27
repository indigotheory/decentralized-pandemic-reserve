import React from 'react';
import './App.css';import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import StartApp from './components/StartApp';


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

        <Header/>

        <StartApp/>


      </ThemeProvider>
    </div>
  );
}