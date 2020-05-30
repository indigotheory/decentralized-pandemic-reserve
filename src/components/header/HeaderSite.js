import React, { useState } from 'react'
import { Header } from '@aragon/ui'
import './HeaderSite.css'


function HeaderSite(){
    return(
        <div className="header">
          <div className="header_logo">
            <img src={require('../../img/logo.png')} alt="Indigo Theory Flower Logo" className="it-logo-header"/>
            <h4>Decentralaized Pandemic Reserve (DPR)</h4>
          </div>
          <div className="header_user">
            User: 0x0123456789
          </div>
        </div>
    )
    
}
export default HeaderSite