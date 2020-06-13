import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import FilterBar from '../components/FilterBar'
import './VoteNeed.css'
import CommunityNeed from '../CommunityNeed/CommunityNeed'
import { Box, Button, Main, Split } from '@aragon/ui'
import MainMenu from '../components/menu/MainMenu'

import {
    ThemeProvider 
} from '@chakra-ui/core'

function VoteNeed() {
    const [sidePanelOpened, setSidePanelOpened] = useState(false)
    return (
      <ThemeProvider>
          <div>
              <Split
                  invert="horizontal"
                  secondary={
                      <MainMenu/>
                  }
                  primary={
                    <Main>
                      <FilterBar/>
                      <CommunityNeed/>
                    </Main>
                  }
                
              />

  
          </div>
      </ThemeProvider>
      )
    }




// const VoteNeed = ({ match }) => {
//   console.log(match);
//   return (
//     <div>
//       {" "}
//       <ul>
//         <li>
//           <Link to={`${match.url}/shoes`}>Shoes</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/boots`}>Boots</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/footwear`}>Footwear</Link>
//         </li>
//       </ul>
//       <Route
//         path={`${match.path}/:name`}
//         render={({ match }) => (
//           <div>
//             {" "}
//             <h3> {match.params.name} </h3>
//           </div>
//         )}
//       />
//     </div>
//   );
// };
// export default VoteNeed;


export default VoteNeed
