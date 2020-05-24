import React, { useState } from 'react'
import { Main,  SidePanel } from '@aragon/ui'
import Header from './components/Header.js'
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from './VoteNeed/VoteDetail';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Some demo data
const token = {
  name: 'My Organization Token',
  symbol: 'MOT',
  address: '0x…',
  transferable: true,
  supply: 8,
  holders: [
    ['0xcafe…', 3],
    ['0xbeef…', 2],
    ['0xfeed…', 1],
    ['0xface…', 1],
    ['0xbead…', 1],
  ],
}


function App() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Router>
        <Switch>
          <Route path="/voteDetail">
            <VoteDetail/>
          </Route>
          <Route path="/">
            <Header />
            <VoteNeed/>
          </Route>
        </Switch>
      </Router>



      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      />
    </Main>
  )
}

export default App;
