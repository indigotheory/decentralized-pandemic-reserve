import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown, Card, EmptyStateCard, TextInput } from '@aragon/ui';

function ProductStart(){
    // const [value, setValue] = useState('')
    // const [selected, setSelected] = useState(0)

    function goBack() {
        window.history.back();
    }

    return(
        <div className="container">
            
            <div className="contentContainer form centerForm">
                <Bar primary={<BackButton onClick={() => goBack()} />} />
                {/* <ProgressBar/> */}
                <h4>Finished Product</h4>
                <div className="cardLayout">
                    <Card className="cardOption">
                        <Link to="/"><img src={require('../../img/raw-materials.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                        <label>Respirator (N95)</label>
                        <Link to="/need/material">
                            <Button 
                                mode="strong" 
                                label="Select" 
                                className="actionButton"
                                />
                        </Link>
                    </Card>

                    <Card className="cardOption">
                        <Link to="/"><img src={require('../../img/finished-product.svg')} alt="Raw Materials Icon" className="cardIcon"/></Link>
                        <label>Masks (face shields, surgical masks)</label>
                        <Link to="/need/product">
                            <Button 
                                mode="strong" 
                                label="Select" 
                                className="actionButton"
                            />
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
    
}
export default ProductStart