import React from 'react';
import './Header.css'
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import {Route, Switch} from 'react-router-dom'

const Header = () => {
    return ( 
        <>
    <Switch>
        <Route path='/' exact render={()=> (
            <img src={img1} alt="image1"></img>
        )} />
        <Route path='/products' render={()=> (
            <img src={img2} alt="image2"></img>
        )} />
        <Route path='/contact' render={()=> (
            <img src={img3} alt="image3"></img>
        )} />
        <Route path='/admin' render={()=> (
            <img src={img1} alt="image1"></img>
        )} />
        <Route render={()=> (
            <img src={img2} alt="image2"></img>
        )} />
    </Switch>   
            
        </>
     );
}
 
export default Header;