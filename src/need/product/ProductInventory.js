import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, TextInput } from '@aragon/ui';
// import { render } from '@testing-library/react';

function ProductInventory(){
  const [inventory, setInventory] = useState('')
  console.log("Need inventory: " + inventory);

  function goBack() {
    window.history.back();
  }

    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            {/* <ProgressBar/> */}
            
            <div className="contentContainer form_sm form">
                
                <label>What is the expected inventory you can provide of said material or component?</label>
                <TextInput
                value={inventory}
                onChange={event => {
                    setInventory(event.target.value)
                }}
                />

                <Link to="/need/needProfile">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default ProductInventory