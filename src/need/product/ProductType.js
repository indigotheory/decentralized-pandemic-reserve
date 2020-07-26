import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { BackButton, Bar, Button, DropDown } from '@aragon/ui';

const initialState = {
    need_product_type: 0
  };

function ProductType(){
    const [need_product_type, setNeedProductType] = useState('')
    console.log("Need Product Type: " + need_product_type);

    function goBack() {
        window.history.back();
    }

    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            
            <div className="contentContainer form_sm form">
                
            <label>What final product(s) do you need?</label>
                <DropDown
                items={['Respirator (N95)', 'Masks (face shields, surgical masks)', 'Hospital Gowns','Gloves','Sanitizer','Ventilators','Test Kits']}
                selected={need_product_type}
                onChange={setNeedProductType}
                className="dropDown"
                />

                <Link to="/need/productType">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default ProductType