import React from 'react';
import { Main, Card } from '@aragon/ui'
import './CommunityNeed.css';
import { Link } from 'react-router-dom';

function CommunityNeed(){
    return(
        <Main>
            <h3>Open</h3>

            <section className="openVotes">
                <Card>Card content</Card>
                <Card>Card content</Card>
                <Card>Card content</Card>
                <Card>Card content</Card>
                <Card>Card content
                    <hr/>
                    <div><a href="/voteDetail">More</a></div>
                </Card>
            </section>
        </Main>
    );
    
}
export default CommunityNeed