import React from 'react';
import {Link} from 'react-router-dom';

const games = ['oczko', 'kamieńpapiernożyce']

const GamesListPage = () => {
    const gamesList = games.map(game=>(
        <li key={game}>
            <Link to={`/game/${game}`}>{game}</Link>
            </li>
    ))
    return ( 
        <ul>{gamesList}</ul>
     );
}
 
export default GamesListPage;
 