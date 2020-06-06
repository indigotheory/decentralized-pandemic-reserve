import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, TextInput } from '@aragon/ui';

function FinishedInventory(){
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const [selected, setSelected] = useState(0)
  function goBack() {
    window.history.back();
  }
    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            <ProgressBar/>
            <div className="contentContainer form_sm form">
                
                <label>What is the expected inventory you can provide of said finished product?</label>
                <TextInput
                value={value}
                onChange={event => {
                    setValue(event.target.value)
                }}
                />

                <label>Estimated cost per unit</label>
                <TextInput
                value={value2}
                onChange={event => {
                    setValue2(event.target.value)
                }}
                />

                <Link to="/voteNeed">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default FinishedInventory