import React from 'react';
import '../styles/Header.css'
import {Route, Switch} from 'react-router-dom'

const Header = () => {
    return ( 
        <>
    <Switch>
        <Route path='/' exact render={()=> (
            <div className='header'>
                <div className='avatar'>
                    <div className='head'></div>
                    <div className='leftear'>
                        <div className='inside'></div>
                    </div>
                    <div className='rightear'>
                        <div className='inside'></div>
                    </div>
                    <div className='leftglass silver'></div>
                    <div className='rightglass silver'></div>
                    <div className='glassconnection'></div>
                    <div className='glassleftrod'></div>
                    <div className='glassrightrod'></div>
                    <div className='hair1'></div>
                    <div className='leftbrow'></div>
                    <div className='rightbrow'></div>
                </div>
            </div>
        )} />
        <Route path='/games' render={()=> (
            <div className='header'>
            <div className='avatar'>
                <div className='head'></div>
                <div className='leftear'>
                    <div className='inside'></div>
                </div>
                <div className='rightear'>
                    <div className='inside'></div>
                </div>
                <div className='leftglass red'></div>
                <div className='rightglass red'></div>
                <div className='glassconnection'></div>
                <div className='glassleftrod'></div>
                <div className='glassrightrod'></div>
                <div className='hair1'></div>
                <div className='leftbrow'></div>
                <div className='rightbrow'></div>
            </div>
        </div>
        )} />
        <Route path='/tools' render={()=> (
            <div className='header'>
            <div className='avatar'>
                <div className='head'></div>
                <div className='leftear'>
                    <div className='inside'></div>
                </div>
                <div className='rightear'>
                    <div className='inside'></div>
                </div>
                <div className='leftglass'></div>
                <div className='rightglass'></div>
                <div className='glassconnection'></div>
                <div className='glassleftrod'></div>
                <div className='glassrightrod'></div>
                <div className='hair1'></div>
                <div className='leftbrow'></div>
                <div className='rightbrow'></div>
            </div>
        </div>
        )} />
    </Switch>   
            
        </>
     );
}
 
export default Header;