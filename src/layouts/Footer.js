import React from 'react';
import {Route} from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
    return ( 
        <div>
            <h4>Footer</h4>
            <Route path='/' exact render={()=>(
                <p>Jesteś na <span>stronie głównej</span></p>
            )}/>

            <Route path='/:page' render={(props)=>(
                <>
                <p>Jesteś na <span>{props.match.params.page}</span></p>
                
                </>
            )}/>

            <Route path='/:page/:product' render={(props)=>(
                <>
                <p>Jesteś na <span>{props.match.params.product}</span></p>
                
                </>
            )}/>

        </div>
     );
}
 
export default Footer;