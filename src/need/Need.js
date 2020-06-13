import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' 
import MainMenu from '../components/menu/MainMenu'
import NeedStart from './NeedStart'
import NeedMaterial from './NeedMaterial'
import NeedLabor from './NeedLabor'
import NeedProduct from './NeedProduct'
import NeedSpace from './NeedSpace'
import NeedProcess from './NeedProcess'
import { Main, Split } from '@aragon/ui';


export default function Need() {
  
    return (
      <div className="container main-container">
          <Split
              invert="horizontal"
              secondary={
                  <MainMenu/>
              }
              primary={
                <Main>
                  <Router>
                    <Switch>
                      <Route exact path="/need">
                        <NeedStart/>
                      </Route>

                      <Route path="/need/material">
                        <NeedMaterial/>
                      </Route>

                      <Route path="/need/labor">
                        <NeedLabor/>
                      </Route>

                      <Route path="/need/process">
                        <NeedProcess/>
                      </Route>

                      <Route path="/need/space">
                        <NeedSpace/>
                      </Route>

                      <Route path="/need/product">
                        <NeedProduct/>
                      </Route>

                    </Switch>
                  </Router>
                </Main>
              }
                
          />
    </div>
    );
  }