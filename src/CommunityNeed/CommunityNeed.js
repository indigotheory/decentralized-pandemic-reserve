import React, { useState } from 'react';
import CardVoteNeed from './CardVoteNeed';
import './CommunityNeed.css';

function CommunityNeed(){
    return(
        <div>
            <h3 className="h3-a">Open</h3>

            <section className="openVotes">
                <CardVoteNeed
                yperc={85}
                nperc={15}
                />
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
                <CardVoteNeed/>
            </section>
        </div>
    );
    
}
export default CommunityNeed