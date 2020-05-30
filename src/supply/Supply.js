import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Header from '../components/header/HeaderSite'
import { Button } from '@aragon/ui';
import './Supply.css'


export default function Supply() {
  
    return (
      <div>
        <Header/>

        <Router>
          <Switch>
            <Route exact path="/supply">
              Supply Home/Offer
              <Link to="/supply/material">
                <Button mode="strong" label="Next"/>
              </Link>
              </Route>
            <Route path="/supply/material">Supply Material</Route>
          </Switch>
        </Router>

        
      </div>
    );
  }