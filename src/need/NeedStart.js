import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { Button, DropDown, Card, EmptyStateCard, TextInput } from '@aragon/ui';

function NeedStart(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)

    return(
        <div className="container">

        <div className="contentContainer form centerForm">
            <ProgressBar/>
            <h4>I need</h4>
            <div className="cardLayout">
                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/raw-materials.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Raw Materials / Components</label>
                    <Link to="/need/material">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card>

                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/labor.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Labor / Volunteers</label>
                    <Link to="/need/labor">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card>

                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/production.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Production Process / Equipment</label>
                    <Link to="/need/process">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card>

                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/space.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Production Space (rental / share)</label>
                    <Link to="/need/space">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card>

                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/finished-product.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Finished Product</label>
                    <Link to="/need/product">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card>
            </div>
            </div>
        </div>
    );
    
}
export default NeedStart