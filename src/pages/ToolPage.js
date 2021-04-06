import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calculator from '../components/Calculator'
import CurrencyConverter from '../components/CurrencyConverter'
import ToDo from '../components/ToDo'

const ToolPage = () => {
    return (
        <div>
            <Switch>
                <Route path="/tool/kalkulator" component={Calculator}/>
                <Route path="/tool/przelicznik" component={CurrencyConverter}/>
                <Route path="/tool/zadania" component={ToDo}/>
            </Switch>
        </div>
      );
}
 
export default ToolPage;