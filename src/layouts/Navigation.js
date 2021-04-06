import React from 'react';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom'


const nav = [
    {name: 'start', path: '/', exact: true},
    {name: 'narzędzia', path: '/tools'},
    {name: 'gry', path: '/games'}
]
const Navigation = () => {
    const navigation = nav.map(item=> {
        return (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>
                    {item.name}
                </NavLink>
            </li>
        )
    })
    return ( 
        <nav>
            <ul>
                {navigation}
            </ul>
        </nav>
     );
}
 
export default Navigation;