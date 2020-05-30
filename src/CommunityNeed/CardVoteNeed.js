import React, { useState } from 'react';
import { Button, IdentityBadge, Timer } from '@aragon/ui'
import './CardVoteNeed.css';

const need = {
        yperc: 0.75,
        nperc: 0.25,
        label: 'Finished Product',
        entity: '0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c',
        voteNum: 108,
        needAmount: 2500000,
        needTitle: 'Masks N95',
        needLoc: 'Rome, Italy',
        passed: 0
    }

    const NOW = Date.now()
    const DAY = 1000 * 60 * 60 * 24
    
    const endDate = new Date(NOW + 5 * DAY)
    const startDate = new Date(NOW - 5 * DAY)

function CardVoteNeed(){
    var ytrans = 'scale3d(' + need.yperc + ', 1, 1)';
    var ntrans = 'scale3d(' + need.nperc + ', 1, 1)';
    var ycss = {
        transform: ytrans 
    }
    var ncss = {
        transform: ntrans 
    }
    

    return(
        <div className="voteCard">
            <IdentityBadge
            customLabel={need.label}
            entity={need.entity}
            connectedAccount
            className="votebutton"
            />
            {/* Vote Num, Vote Quantity, Vote Request */}
            <div className="cardTitle">#{need.voteNum}: {need.needAmount} {need.needTitle}
                <span> for </span>
                {/* Vote Loc */}
                {need.needLoc}
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
                        <div className="yes-progress" style={ycss}></div>
                    </div>
                </div>
                {/* Vote Button */}
                <Button mode="positive" className="positive">Yes</Button>
                {/* No % */}
                <div className="score-attribute">
                    <div className="attribute-title">
                        <label>No</label>
                        <span>5%</span>
                    </div>
                    <div className="attribute-scale">
                        <div className="no-progress" style={ncss}></div>
                    </div>
                </div>
                {/* Vote Button */}
                <Button mode="negative" className="negative">No</Button>
            </div>
            <div><Timer end={endDate} /> <Timer start={startDate}/></div>
            <hr/>
            <div className="cardAction"><a href="/voteDetail">More</a></div>
        </div>
    );
    
}
export default CardVoteNeed