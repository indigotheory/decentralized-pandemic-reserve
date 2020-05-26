import React from 'react';
import './attributeScale.css';

function LocationScore(){
    return(
        <div>
            <div className="score-attribute">
                <p className="attribute-title">
                    <label>Location (LOC)</label>
                    <span>95%</span>
                </p>
                <div className="attribute-scale">
                    <div className="attribute-progress"></div>
                </div>
            </div>
        </div>
    )
    
}
export default LocationScore