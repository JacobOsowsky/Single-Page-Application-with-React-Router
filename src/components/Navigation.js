import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom'


const nav = [
    {name: 'start', path: '/', exact: true},
    {name: 'products', path: 'products'},
    {name: 'contact', path: 'contact'},
    {name: 'admin panel', path: 'admin'},
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