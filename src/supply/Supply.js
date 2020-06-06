import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Header from '../components/header/HeaderSite'
import SupplyMaterial from './SupplyMaterial'
import SupplyStart from './SupplyStart'
import FinishedOffer from './finishedProduct/FinishedOffer'
import FinishedCertified from './finishedProduct/FinishedCertified'

import FinishedInventory from './finishedProduct/FinishedInventory'
import ProgressBar from '../components/ProgressBar'
import { Button, DropDown, TextInput } from '@aragon/ui';
import './Supply.css'


export default function Supply() {

  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path="/supply">
            <SupplyStart/>
          </Route>

          <Route path="/supply/material">
            <SupplyMaterial/>
          </Route>

          <Route path="/supply/finishedProduct">
            <FinishedOffer/>
          </Route>

          <Route path="/supply/finishedCertified">
            <FinishedCertified/>
          </Route>

          <Route path="/supply/finishedInventory">
            <FinishedInventory/>
          </Route>

        </Switch>
      </Router>

      
    </div>
  );
  }