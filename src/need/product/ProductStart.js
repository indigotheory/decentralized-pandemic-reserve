import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import ProgressBar from '../../components/ProgressBar'
import { BackButton, Bar, Button, DropDown } from '@aragon/ui';

function ProductStart(){
    const [need_product, setNeedProduct] = useState(0)
    console.log("Need Product: " + need_product);

    function goBack() {
        window.history.back();
    }

    return(
        <div>
            <Bar primary={<BackButton onClick={() => goBack()} />} />
            {/* <ProgressBar/> */}
            
            <div className="contentContainer form_sm form">
                
            <label>What final product(s) do you need?</label>
                <DropDown
                items={['Respirator (N95)', 'Masks (face shields, surgical masks)', 'Hospital Gowns','Gloves','Sanitizer','Ventilators','Test Kits']}
                selected={need_product}
                onChange={setNeedProduct}
                className="dropDown"
                />

                <Link to="/need/productInventory">
                    <Button mode="strong" label="Next" className="actionButton"/>
                </Link>
            </div>
        </div>
    );
    
}
export default ProductStart