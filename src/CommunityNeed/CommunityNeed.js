import React from 'react';
import CardVoteNeed from './CardVoteNeed';
import './CommunityNeed.css';

function CommunityNeed(){
    return(
        <div>
            <h3 className="h3-a">Open</h3>

            <section className="openVotes">
                <CardVoteNeed/>
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