import React from 'react';
import './attributeScale.css';

function StageScore(){
    return(
        <div>
            <div className="score-attribute">
                <div className="attribute-title">
                    <label>Stage (STG)</label>
                    <span>4/6</span>
                </div>
                <div className="attribute-scale">
                    <div className="attribute-progress"></div>
                </div>
            </div>
        </div>
    )
    
}
export default StageScore