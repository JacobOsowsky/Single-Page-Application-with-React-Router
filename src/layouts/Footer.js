import React from 'react';

const Footer = (props) => {
    const seconds = props.timeCounter;
    const minutes = Math.floor(props.timeCounter / 60);
     
    return ( 
        <p>Jesteś już na stronie: <strong>{minutes > 0 && minutes}</strong> {minutes > 0 && 'min.'}<strong> {seconds < 60 ? seconds : seconds-minutes*60}</strong> sek.</p>
     );
}
 
export default Footer;