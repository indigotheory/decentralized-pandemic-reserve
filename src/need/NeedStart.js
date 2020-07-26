import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import ProgressBar from '../components/ProgressBar'
import { NeedContext } from './Need'
import { BackButton, Bar, Button, DropDown, Card, EmptyStateCard, TextInput } from '@aragon/ui';



function goBack() {
    window.history.back();
  }

function NeedStart(){
    const { dispatch } = React.useContext(NeedContext);
    const initialState = {
        need_type: ""
    }
    const [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
          ...data,
          need_type: event.target.label
        });
        dispatch({
            type: data.need_type
        })
      };


    return(
        <div className="container">
            
        <div className="contentContainer form centerForm">
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            {/* <ProgressBar/> */}
            <h4>I need</h4>
            <div className="cardLayout">
                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/raw-materials.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Raw Materials / Components</label>
                    <Link to="/need/material">
                        <Button 
                            mode="strong" 
                            label="Select"
                            value="data.need_type" 
                            className="actionButton"
                            onChange={handleInputChange}
                            />
                    </Link>
                </Card>

                {/* <Card className="cardOption">
                    <Link to="/"><img src={require('../img/labor.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Labor / Volunteers</label>
                    <Link to="/need/labor">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card> */}

                {/* <Card className="cardOption">
                    <Link to="/"><img src={require('../img/production.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Production Process / Equipment</label>
                    <Link to="/need/process">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card> */}

                {/* <Card className="cardOption">
                    <Link to="/"><img src={require('../img/space.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Production Space (rental / share)</label>
                    <Link to="/need/space">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </Card> */}

                <Card className="cardOption">
                    <Link to="/"><img src={require('../img/finished-product.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                    <label>Finished Product</label>
                    <Link to="/need/product">
                        <Button 
                            mode="strong" 
                            label="Select"
                            value="data.need_type" 
                            className="actionButton"
                            onChange={handleInputChange}
                        />
                    </Link>
                </Card>
            </div>
            </div>
        </div>
    );
    
}
export default NeedStart