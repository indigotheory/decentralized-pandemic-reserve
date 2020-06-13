import React from 'react';
import MainMenu from '../components/menu/MainMenu'
import { Box, Split } from '@aragon/ui'

export default function Need() {
  
    return (
      <Split
                invert="horizontal"
                secondary={
                    <MainMenu/>
                }
                primary={
                  <Box heading="Menu" className="mainMenu">
                    <div className="container">

                      <h2>About DPR</h2>
                      <p>DPR is @wfsterling @alexanng @nanspro @ronaldstoner @exynos-999</p>
                    </div>
                  </Box>
                }
            />
    );
  }