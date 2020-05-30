import React from 'react'
import FilterBar from '../components/FilterBar'
import './VoteNeed.css'
import CommunityNeed from '../CommunityNeed/CommunityNeed'


// Some demo data
// const token = {
//   name: 'My Organization Token',
//   symbol: 'MOT',
//   address: '0x…',
//   transferable: true,
//   supply: 8,
//   holders: [
//     ['0xcafe…', 3],
//     ['0xbeef…', 2],
//     ['0xfeed…', 1],
//     ['0xface…', 1],
//     ['0xbead…', 1],
//   ],
// }


export default function VoteNeed() {
  return (
    <div>
      <FilterBar/>
      <CommunityNeed/>
    </div>
  )
}
