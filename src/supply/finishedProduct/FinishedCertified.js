import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, Radio, RadioGroup } from '@aragon/ui';
import '../../forms.css'

const RADIO_LABELS = ['Yes', 'No']

class FinishedCertified extends Component {
    state = {
        activeId: 'first',
        activeId2: 'first',
      }
      
      compliantChange = activeId => {
        this.setState({ activeId })
      }
      certifiedChange = activeId2 => {
        this.setState({ activeId2 })
      }
      
    render(){
        const { activeId } = this.state
        const { activeId2 } = this.state
        function goBack() {
            window.history.back();
          }
        return(
        
            <div>
                <Bar primary={<BackButton onClick={() => goBack()} />} />
                <ProgressBar/>
                <div className="contentContainer form_sm form">
                    
                    <label>Is this product regulatory compliant?</label>
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
                    
                    <label>Does this product have proof of certification?</label>
                    <RadioGroup onChange={this.certifiedChange} selected={activeId2}>
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
    
                    <Link to="/supply/finishedInventory">
                        <Button mode="strong" label="Next" className="actionButton"/>
                    </Link>
                </div>
            </div>
        );
    }
    
    
}
export default FinishedCertified