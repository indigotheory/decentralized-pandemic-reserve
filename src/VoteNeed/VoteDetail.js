import React, { useState } from 'react'
import { Main, Split, SidePanel } from '@aragon/ui'
import CommunityNeed from '../CommunityNeed/CommunityNeed'
import ScoreSidebar from '../components/sidebar/ScoreSidebar'
import Header from '../components/Header'
import './VoteDetail.css'


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


export default function VoteDetail() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Header />
      <Split
        primary={
          <>
            <CommunityNeed/>
          </>
        }
        secondary={
          <>
            <h4>Sidebar</h4>
            <ScoreSidebar/>
          </>
        }
      />
      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      />
    </Main>
  )
}
