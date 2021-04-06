import React from 'react';
import '../styles/Footer.css'

const Footer = (props) => {
    const seconds = props.timeCounter;
    const minutes = Math.floor(props.timeCounter / 60);
     
    return ( 
        <p>Jesteś już na stronie: <strong>{minutes}</strong> min.<strong> {seconds < 60 ? seconds : seconds-minutes*60}</strong> sek.</p>
     );
}
 
export default Footer;