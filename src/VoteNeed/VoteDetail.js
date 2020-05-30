import React, { useState } from 'react'
import { BackButton, Bar, Box, Header, IdentityBadge, EthIdenticon, Main, Split, SidePanel, Tag } from '@aragon/ui'
import LocationScore from '../components/sidebar/LocationScore'
import RValue from '../components/sidebar/RValue'
import StageScore from '../components/sidebar/StageScore'
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
  yloc: 0.95,
  stage: 0.25,
  rValue: 2.04,
  label: 'Finished Product',
  entity: '0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c',
  voteNum: 108,
  needAmount: 2500000,
  needTitle: 'Masks N95',
  needLoc: 'Rome, Italy',
  passed: 0,
  needBusiness: 'Clara Maass medical Center',
  needAccredited: 'AAAHC Accreditation',
  needBusinessType: 'Immediate Urgent Care Center',
  needAssessment: 'We are currently using 2000 masks a day and will be without supply on May 15th. We are forcasting at least an 8 week need. We are seeking every avenue for supplies. We have received only 2,000 masks in federal assistance, despite assurances more have been sent. Clara Maass is currently handling all COVID cases in the Essex county surrounding area. Essex county is the top outbreak for NJ, PA and DE. IMMEDIATE (URGENT) Clara Maass is currently implementing emergency guidelines in order conserve limited supply. Our staff are reusing masks when we should be disposing them. The potential to spread is great until we have enough stock to prevent it. Stocking supplies of masks will contribute to moral during a high-stress time for our first-responders. I can not emphasize how important this is. We are working with the Governor and Innovative Task Force appointed by the Governor to leverage any and all state and federal resources. In addition, the tri-county board has international requests from China, S. Korea, and Germany. We are working with our local, state and federal leaders to secure the minimum supplies necessary to combat a pandemic we are whoefully unprepaired for. In addition, we have put DAILY calls to both state and federal (FEMA) leadership to expidite resources.',
  currentVotesYes: 10,
  currentVotesNo: 0,

}

const NOW = Date.now()
const DAY = 1000 * 60 * 60 * 24
const endDate = new Date(NOW + 5 * DAY)
const startDate = new Date(NOW - 5 * DAY)

export default function VoteDetail() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  var setyloc = 'scale3d(' + token.yloc + ', 1, 1)';
  var setstage = 'scale3d(' + token.stage + ', 1, 1)';
  var setrValue = 'scale3d(' + token.rValue + ', 1, 1)';
  var yLoccss = {
      transform: setyloc 
  }
  var stagecss = {
      transform: setstage 
  }
  var rValuecss = {
    transform: setrValue 
  }

  function goBack() {
    window.history.back();
  }


  return (
    <Main>
      <Header
          primary={
              <>
                <h1 className="h1a">Community Voting</h1>
              </>
          }
      />
      <Split
        primary={
          <>
            <Bar primary={<BackButton onClick={() => goBack()} />} />

            <Box className="detailsWrapper">
              <IdentityBadge
              customLabel={token.label}
              entity={token.entity}
              connectedAccount
              className="votebutton"
              />
              <h2 className="h2a">Vote #120g</h2>
              <div className="cardTop">
                <aside>
                  <label>Description</label>
                  <p>{token.needTitle}</p>

                  <label>Business / Organization</label>
                  <p>{token.needBusiness}<br/>
                  {token.needAccredited}<br/>
                  {token.needBusinessType}
                  </p>
                </aside>
                <aside>
                  <label>Created By</label> 
                  <EthIdenticon
                    address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
                    scale={1}
                    radius={1}
                    soften={0.7}
                  />

                  <label>Reputation</label>
                  <p className="reputationList">
                    <span>TOKENS</span> 
                    <span>0</span>
                  </p>
                </aside>
              </div>
              

              <label>Needs Assessment</label>
              <div className="needsAssessment">
                {token.needAssessment}
              </div>



            </Box>
          </>
        }

        // Sidebar
        secondary={
          <>
            <Box  heading="Secondary">
              <LocationScore/>
              <StageScore/>
              <RValue/>
            </Box>
            
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