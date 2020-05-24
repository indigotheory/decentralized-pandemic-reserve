import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { BackButton, Bar, Header, Main, Split, SidePanel } from '@aragon/ui'
import ScoreSidebar from '../components/sidebar/ScoreSidebar'
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
const h1_a = {
  fontSize: '2.4em',
  fontWeight: 600,
  fontFamily: 'Source Sans Pro'
};

export default function VoteDetail() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Header
            primary={
                <>
                <h1 style={h1_a}>Community Voting</h1>
                {/* <Tag mode="identifier">PTO</Tag> */}
                </>
            }
        />
      <Split
        primary={
          <>
            <Bar primary={<BackButton onClick={() => this.BrowserRouter.goBack} />} />
            Need VoteDetail
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
