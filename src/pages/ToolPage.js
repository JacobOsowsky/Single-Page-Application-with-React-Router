import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calculator from '../components/Calculator'
import CurrencyConverter from '../components/CurrencyConverter'
import ToDo from '../components/ToDo'

const ToolPage = () => {
    return (
        <div>
            <Switch>
                <Route path="/tools/kalkulator" component={Calculator}/>
                <Route path="/tools/przelicznik" component={CurrencyConverter}/>
                <Route path="/tools/zadania" component={ToDo}/>
            </Switch>
        </div>
      );
}
 
export default ToolPage;