import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HeaderSite.css'


function HeaderSite(){
    return(
        <div className="header">
          <div className="header_logo">
            <Link to="/"><img src={require('../../img/logo.png')} alt="Indigo Theory Flower Logo" className="it-logo-header"/></Link>
            <h4>Decentralized Pandemic Reserve (DPR)</h4>
          </div>
          <div className="header_user">
            User: 0x0123456789
          </div>
        </div>
    )
    
}
export default HeaderSite