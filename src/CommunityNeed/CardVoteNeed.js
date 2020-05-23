import React from 'react';
import { Button, Card, IdentityBadge, Main } from '@aragon/ui'
import './CardVoteNeed.css';

function CardVoteNeed(){
    return(
        <div className="voteCard">
            <IdentityBadge
            customLabel="Finished Product"
            entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
            connectedAccount
            className="votebutton"
            />
            {/* Vote Num, Vote Quantity, Vote Request */}
            <div className="cardTitle">#108: 2,500,000 Masks N95
                <span>for</span>
                {/* Vote Loc */}
                Rome, Italy
            </div>
            {/* Voting Grid */}
            <div className="voteGrid">
                {/* Yes % */}
                <div className="score-attribute">
                    <div className="attribute-title">
                        <label>Yes</label>
                        <span>95%</span>
                    </div>
                    <div className="attribute-scale">
                        <div className="attribute-progress"></div>
                    </div>
                </div>
                {/* Vote Button */}
                <Button mode="positive">Yes</Button>
                {/* No % */}
                <div className="score-attribute">
                    <div className="attribute-title">
                        <label>Yes</label>
                        <span>95%</span>
                    </div>
                    <div className="attribute-scale">
                        <div className="attribute-progress"></div>
                    </div>
                </div>
                {/* Vote Button */}
                <Button mode="negative">No</Button>
            </div>

            <hr/>
            <div><a href="/voteDetail">More</a></div>
        </div>
    );
    
}
export default CardVoteNeed