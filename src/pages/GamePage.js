import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Oczko from '../components/Oczko'
import PaperScissorsRock from '../components/PaperScissorsRock'

const GamePage = () => {
    return (
        <div>
            <Switch>
                <Route path="/games/oczko" component={Oczko}/>
                <Route path="/games/kamień-papier-nożyce" component={PaperScissorsRock}/>
            </Switch>
        </div>
      );
}
 
export default GamePage;