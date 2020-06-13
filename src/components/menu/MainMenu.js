import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Box } from '@aragon/ui'

class MainMenu extends React.Component {
    render() { 
        return (
            <Box heading="Menu" className="mainMenu">
                <ul>
                    <li><Link to="/"><div className="icon-rounded"><img src={require('../../img/icons/home-icon.svg')} alt="DPR Home"/></div>Home</Link></li>
                    <li><Link to="/need"><div className="icon-rounded"><img src={require('../../img/icons/tokens-icon.svg')} alt="DPR Home"/></div>Need</Link></li>
                    <li><Link to="/voteneed"><div className="icon-rounded"><img src={require('../../img/icons/voting-icon.svg')} alt="DPR Home"/></div>Voting</Link></li>
                    <li><Link to="/about"><div className="icon-rounded"><img src={require('../../img/icons/finance-icon.svg')} alt="DPR Home"/></div>About</Link></li>
                </ul>
            </Box>
        );
    }
  }
  export default MainMenu