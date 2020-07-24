import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown,Radio, RadioGroup, TextInput } from '@aragon/ui';
import { render } from '@testing-library/react';

function NeedProfile2(){
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
                  
                    <label>Country</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>State / Territory</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>City</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
                    <label>Zipcode</label>
                    <TextInput
                        value={value}
                        onChange={event => {
                            setValue(event.target.value)
                        }}
                    />
  
                    <Link to="/need/needProfile3">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </div>
          </div>
      );
      
  }
  export default NeedProfile2