import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
// import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown, TextInput } from '@aragon/ui';
// import { render } from '@testing-library/react';

function NeedAssessment(){
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
                    <h5>Needs Assessment</h5>
                    <label>For what purpose are you requesting this resource?</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>Why should your organization be considered a priority need?</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>What is your level of need?</label>
                    <DropDown
                    items={['Immediate (Greatest)', 'Urgent', 'Delayed','Expectant (Least)']}
                    selected={selected}
                    onChange={setSelected}
                    className="dropDown"
                    />
  
                    <Link to="/need/needAssessment2">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </div>
          </div>
      );
      
  }
  export default NeedAssessment