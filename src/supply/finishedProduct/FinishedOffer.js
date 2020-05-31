import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown, TextInput } from '@aragon/ui';

function FinishedOffer(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)
  function goBack() {
    window.history.back();
  }
    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            <ProgressBar/>
            
            <div className="contentContainer form_sm form">
                
                <label>What finished product can you offer?</label>
                <DropDown
                items={['Respirator (N95)', 'Masks (face shields, surgical masks)', 'Hospital Gowns','Gloves','Sanitizer','Ventilators','Test Kits']}
                selected={selected}
                onChange={setSelected}
                className="dropDown"
                />

                <Link to="/supply/finishedCertified">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default FinishedOffer