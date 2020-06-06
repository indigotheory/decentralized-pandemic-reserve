import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import { Button, DropDown, TextInput } from '@aragon/ui';

function NeedSpace(){
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState(0)

    return(
        <div>
            <ProgressBar/>
            <div className="contentContainer form_sm form">
                
                Space Page

                <Link to="/supply/finishedProduct/finishedInventory">
                <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default NeedSpace