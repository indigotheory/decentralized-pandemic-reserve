import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Need from './need/Need'
import Supply from './supply/Supply';
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from "./VoteNeed/VoteDetail"
import { Button, Main} from '@aragon/ui'
import { ThemeProvider } from '@chakra-ui/core'
import './App.css'

//TODO: Bug - why is the router not working? 

// function App() {
//   return (
//     <main>
//         <Switch>
//           <Route path="/" component={Home} exact />
//           <Route path="/voteneed" component={VoteNeed} />
//           <Route path="/votedetail" component={VoteDetail} />
//           <Route component={Error} />
//         </Switch>
//     </main>
//   )
// }

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
              <Route path="/">
                <Home />
              </Route>
          </Switch>
      </Router>
      
    </Main>
  )
}

export default App;