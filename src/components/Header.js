import React from 'react';
import './Header.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from '../img/logo.png'; // Tell webpack this JS file uses this image

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <div className="logo-container">
            <img src={logo} alt="DPR Logo" style={{ width: '100%' }}/>
        </div>
        <Typography variant="h1" class="head-center clear-margin">
            Welcome to DPR
        </Typography>
        <Typography variant="body2" class="head-center">
            Decentralized Pandemic Reserve
        </Typography>
        <Typography variant="h2" class="head-center">
            Join the Consortium
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}