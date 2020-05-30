import React, { Component } from 'react'
import ReactDOM from "react-dom"
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './home/home'
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from "./VoteNeed/VoteDetail"
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
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

//Render app into the root HTML DOM node
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
)

export default App;