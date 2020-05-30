import React from 'react';
import './Supply.css'


export default function Supply() {
  
    return (
      <div>
        {/* Load Header */}
        <div className="header">
          <div className="header_logo">
            <img src={require('../img/logo.png')} alt="Indigo Theory Flower Logo" className="it-logo-header"/>
            <h4>Decentralaized Pandemic Reserve (DPR)</h4>
          </div>
          <div className="header_user">
            User: 0x0123456789
          </div>
        </div>

        


      </div>
    );
  }