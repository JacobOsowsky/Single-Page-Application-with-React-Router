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
            <Route path="/tools" exact component={ToolsListPage}/>
            <Route path="/tools/:id" exact component={ToolPage}/>
            <Route path="/games" exact component={GamesListPage}/>
            <Route path="/games/:id" exact component={GamePage}/>
            <Route component={ErrorPage}/>
        </Switch>
        </div>
     );
}
 
export default Page;