import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ToolsListPage from '../pages/ToolsListPage';
import ToolPage from '../pages/ToolPage';
import GamesListPage from '../pages/GamesListPage';
import GamePage from '../pages/GamePage'
import ErrorPage from '../pages/ErrorPage';


const Page = () => {
    return (
        <div className='page'> 
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/tools" component={ToolsListPage}/>
            <Route path="/tool/:id" component={ToolPage}/>
            <Route path="/games" component={GamesListPage}/>
            <Route path="/game/:id" component={GamePage}/>
            <Route component={ErrorPage}/>
        </Switch>
        </div>
     );
}
 
export default Page;