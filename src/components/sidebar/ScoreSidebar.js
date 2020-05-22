import React from 'react';
import './ScoreSidebar.css';

function ScoreSidebar(){
    return(
        <div>
            <h3>Score</h3>
            <div className="score-attribute">
                <div className="attribute-title">
                    <label>Location (LOC)</label>
                    <span>95%</span>
                </div>
                <div className="attribute-scale">
                    <div className="attribute-progress"></div>
                </div>
            </div>
        </div>
    )
    
}
export default ScoreSidebar