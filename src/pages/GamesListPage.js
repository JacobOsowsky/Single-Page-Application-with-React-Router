import React from 'react';
import {Link} from 'react-router-dom';

const games = ['kamieńpapiernożyce']

const GamesListPage = () => {
    const gamesList = games.map(game=>(
        <li key={game}>
            <Link to={`/game/${game}`}>{game}</Link>
            </li>
    ))
    return ( 
        <>
            <ul>{gamesList}</ul>
            <a href='https://jacobosowsky.github.io/Oczko/'>Oczko</a>
        </>
     );
}
 
export default GamesListPage;
 