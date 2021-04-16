import React from 'react';

const Clock = () => {
    const time = new Date();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return ( 
        <h3 className='clock'>{hours < 10 ? '0' + hours: hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h3>
     );
}
 
export default Clock;