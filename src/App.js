import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Need from './need/Need'
import Supply from './supply/Supply';
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from "./VoteNeed/VoteDetail"
import { Button, Main} from '@aragon/ui'
import { ThemeProvider } from '@chakra-ui/core'
import './App.css'


function App() {
  return (
    <Main>

      <Router>
          <Switch>
              <Route path="/voteneed">
                <VoteNeed />
              </Route>
              <Route path="/need">
                <Need />
              </Route>
              <Route path="/supply">
                <Supply />
              </Route>
              <Route path="/votedetail">
                <VoteDetail />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
          </Switch>
      </Router>

    </Main>
  )
}

export default App;