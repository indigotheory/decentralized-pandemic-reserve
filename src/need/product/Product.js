import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Header from '../../components/header/HeaderSite'
import ProductInventory from './ProductInventory'
import ProductStart from './ProductStart'
import { Button, DropDown, TextInput } from '@aragon/ui';
import './Product.css'


export default function Product() {

  return (
    <div className="container">

      <Router>
        <Switch>
          <Route exact path="/need/product">
            <ProductStart/>
          </Route>

          <Route path="/productInventory">
            <ProductInventory/>
          </Route>

        </Switch>
      </Router>

      
    </div>
  );
  }