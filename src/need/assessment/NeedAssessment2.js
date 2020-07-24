import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown,Radio, RadioGroup, TextInput } from '@aragon/ui';
import { render } from '@testing-library/react';

function NeedAssessment2(){
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
                    <label>What is the expected payoff if you were to receive assistance?</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>What has your organization already done to obtain this resource?</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
  
                    <Link to="/need/needProfile3">
                        <Button mode="positive" label="Join the Consortium" className="actionButton"/>
                    </Link>
                </div>
          </div>
      );
      
  }
  export default NeedAssessment2