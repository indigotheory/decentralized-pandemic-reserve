import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Need from './need/Need'
import Supply from './supply/Supply';
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from "./VoteNeed/VoteDetail"
import './App.css'
import HeaderSite from './components/header/HeaderSite';


function App() {
  return (
    <div>
      
      <Router>
          <Switch>
              <Route path="/voteneed">
                <HeaderSite/>
                <VoteNeed />
              </Route>
              <Route path="/need">
                <HeaderSite/>
                <Need />
              </Route>
              <Route path="/supply">
                <HeaderSite/>
                <Supply />
              </Route>
              <Route path="/votedetail">
                <HeaderSite/>
                <VoteDetail />
              </Route>
              <Route path="/home">
                <HeaderSite/>
                <VoteDetail />
              </Route>
              <Route path="/about">
                <HeaderSite/>
                <About />
              </Route>
              <Route path="/" exact>
                <HeaderSite/>
                <Home />
              </Route>
          </Switch>
      </Router>

    </div>
  )
}

export default App;