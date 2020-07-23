import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown,Radio, RadioGroup, TextInput } from '@aragon/ui';
import { render } from '@testing-library/react';

const RADIO_LABELS = ['Yes', 'No']

class NeedProfile extends Component{
    
    state = {
        activeId: 'first',
        value: '',
        selected: 0
    }

    compliantChange = activeId => {
        this.setState({ activeId })
      }
      valueChange = value => {
        this.setState({ value })
      }
      selectedChange = selected => {
        this.setState({ selected })
      }
    
    //   const [value, setValue] => useState('')
    //   const [selected, setSelected] = useState(0)
render(){
    
    
    function goBack() {
        window.history.back();
    }
    const { activeId } = this.state
    const { value } = this.state
    const { selected } = this.state
    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            {/* <ProgressBar/> */}
            
            <div className="contentContainer form_sm form">
                
                <label>Name of organization or business?</label>
                <TextInput
                value={value}
                onChange={event => {
                    this.valueChange(event.target.value)
                }}
                />

                <label>Do you have any medical accreditation?</label>
                <RadioGroup onChange={this.compliantChange} selected={activeId}>
                    {RADIO_LABELS.map((label, i) => {
                    const radioId = label.toLowerCase()
                    return (
                        <label key={i}>
                        <Radio id={radioId} />
                        {label}
                        </label>
                    )
                    })}
                </RadioGroup>

                <label>Which program?</label>
                <DropDown
                items={['AAAHC Accreditation', 'MH Certification', 'Orthopaedic Certification']}
                selected={selected}
                onChange={this.selectedChange}
                className="dropDown"
                />

                <label>Organization Type?</label>
                <DropDown
                items={['Ambulatory Surgery Center', 'Behavioral Health Center', 'Community Health Center','Convenient Care Clinic','Correctional Healthcare','Dental Practice','Diagnostic Imaging Center','Employer-based Healthcare Center','Fertility Center','Free-standing Emergency Center','Immediate Urgent Care Center','Indian Health Center','Medical Group Practice','Military Facility','OBS Procedure Center','Occupational Heatlth Center','Anesthesia Facility','Oncology Center','Primary Care Center','Student Health Center','OTHER']}
                selected={selected}
                onChange={this.selectedChange}
                className="dropDown"
                />

                <Link to="/need/needProfile2">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    }
}
export default NeedProfile