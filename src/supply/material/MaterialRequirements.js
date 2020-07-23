import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown, TextInput } from '@aragon/ui';

function MaterialRequirements(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)
  function goBack() {
    window.history.back();
  }
    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            {/* <ProgressBar/> */}
            
            <div className="contentContainer form_sm form">
                
                <label>Please outline any physical component requirements, if applicable</label>
                <TextInput
                value={value}
                onChange={event => {
                    setValue(event.target.value)
                }}
                />

                <Link to="/supply/materialInventory">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default MaterialRequirements