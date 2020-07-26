import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' 
import NeedStart from './NeedStart'
import NeedMaterial from './NeedMaterial'
import NeedLabor from './NeedLabor'
import NeedSpace from './NeedSpace'
import NeedProcess from './NeedProcess'
import ProductStart from './product/ProductStart'
import ProductInventory from './product/ProductInventory'
import NeedProfile from './profile/NeedProfile'
import NeedProfile2 from './profile/NeedProfile2'
import NeedProfile3 from './profile/NeedProfile3'
import NeedAssessment from './assessment/NeedAssessment'
import NeedAssessment2 from './assessment/NeedAssessment2'
export const NeedContext = React.createContext();

const initialState = {
  user_type: 'need',
  need_type: ''
}
// const [user_type, setUserType] = useState('need')
const reducer = (state, action) => {
  switch (action.type){
    case "MATERIAL":
        return {
          ...state,
          need_type: 'material'
        };
    case "PRODUCT":
        return {
          ...state,
          need_type: 'product'
        }
    default:
      return state;
  }

}
export default function Need() {
    
  const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <NeedContext.Provider
          value={{
            state,
            dispatch
          }}
        >
            <div className="container">

                <Router>
                  <Switch>
                    <Route exact path="/need">
                      <NeedStart/>
                    </Route>

                    <Route path="/need/material">
                      <NeedMaterial/>
                    </Route>

                    <Route path="/need/labor">
                      <NeedLabor/>
                    </Route>

                    <Route path="/need/process">
                      <NeedProcess/>
                    </Route>

                    <Route path="/need/space">
                      <NeedSpace/>
                    </Route>

                    <Route path="/need/product">
                      <ProductStart/>
                    </Route>

                    <Route path="/need/productInventory">
                      <ProductInventory/>
                    </Route>

                    <Route path="/need/needProfile">
                      <NeedProfile/>
                    </Route>

                    <Route path="/need/needProfile2">
                      <NeedProfile2/>
                    </Route>

                    <Route path="/need/needProfile3">
                      <NeedProfile3/>
                    </Route>

                    <Route path="/need/needAssessment">
                      <NeedAssessment/>
                    </Route>

                    <Route path="/need/needAssessment2">
                      <NeedAssessment2/>
                    </Route>

                  </Switch>
                </Router>

            </div>
        </NeedContext.Provider>
    );
  }