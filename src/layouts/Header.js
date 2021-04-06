import React from 'react';
import '../styles/Header.css'
import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import {Route, Switch} from 'react-router-dom'

const Header = () => {
    return ( 
        <>
    <Switch>
        <Route path='/' exact render={()=> (
            <img src={img1} alt="image1"></img>
        )} />
        <Route path='/games' render={()=> (
            <img src={img2} alt="image2"></img>
        )} />
        <Route path='/tools' render={()=> (
            <img src={img3} alt="image3"></img>
        )} />
    </Switch>   
            
        </>
     );
}
 
export default Header;