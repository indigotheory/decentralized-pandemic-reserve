import React from 'react';
import './attributeScale.css';

function LocationScore(){
    return(
        <div>
            <div className="score-attribute">
                <div className="attribute-title">
                    <label>R-Value (R)</label>
                    <span>92%</span>
                </div>
                <div className="attribute-scale">
                    <div className="attribute-progress rValue"></div>
                </div>
            </div>
        </div>
    )
    
}
export default LocationScore