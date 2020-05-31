import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' 
import NeedStart from './NeedStart'

export default function Need() {
  
    return (
      <div className="container">

      <Router>
        <Switch>
          <Route exact path="/need">
            <NeedStart/>
          </Route>

          {/* <Route path="/need/material">
            <SupplyMaterial/>
          </Route>

          <Route path="/need/finishedProduct">
            <FinishedOffer/>
          </Route>

          <Route path="/need/finishedCertified">
            <FinishedCertified/>
          </Route>

          <Route path="/need/finishedInventory">
            <FinishedInventory/>
          </Route> */}

        </Switch>
      </Router>

      
    </div>
    );
  }