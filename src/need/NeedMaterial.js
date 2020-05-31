import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { Button, DropDown, TextInput } from '@aragon/ui';

function NeedMaterial(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)

    return(
        <div>
            <ProgressBar/>
            <div className="contentContainer form_sm form">
                
                <label>What component or material do you need?</label>
                <DropDown
                items={['Respirator (N95)', 'Masks (face shields, surgical masks)', 'Hospital Gowns','Gloves','Sanitizer','Ventilators','Test Kits']}
                selected={selected}
                onChange={setSelected}
                className="dropDown"
                />

                <label>How much of the component or material do you need?</label>
                <TextInput
                value={value}
                onChange={event => {
                    setValue(event.target.value)
                }}
                />

                <Link to="/supply/finishedProduct/finishedInventory">
                <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default NeedMaterial