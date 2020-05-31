import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { Button, DropDown, TextInput } from '@aragon/ui';

function NeedStart(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)

    return(
        <div>
            <ProgressBar/>
            <div className="contentContainer form_sm form">
                <label>What do you need?</label>
                <DropDown
                items={['Raw Materials / Components', 'Labor / Volunteers', 'Production Process / Equipment','Production Space (rental / share)','Finished Product']}
                selected={selected}
                onChange={setSelected}
                className="dropDown"
                />

                <Link to="/supply/finishedProduct/finishedInventory">
                <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default NeedStart