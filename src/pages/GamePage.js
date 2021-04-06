import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Oczko from '../components/Oczko'
import PaperScissorsRock from '../components/PaperScissorsRock'

const GamePage = () => {
    return (
        <div>
            <Switch>
                <Route path="/game/oczko" component={Oczko}/>
                <Route path="/game/kamieńpapiernożyce" component={PaperScissorsRock}/>
            </Switch>
        </div>
      );
}
 
export default GamePage;