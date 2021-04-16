import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/GamesListPage.css'

const games = [
    {
        name: 'kamień-papier-nożyce',
        description: 'Popularna i prosta gra, polegająca na wyborze jednej z trzech "broni"'
    }
]

const GamesListPage = () => {
    const gamesList = games.map(game=>(
        <div className='game' key={game.name}>
            <Link to={`/games/${game.name}`}>
                <h4>{game.name}</h4>
                <p>{game.description}</p>
                </Link>
            </div>
    ))
    return ( 
        
            <div className='games'>
                {gamesList}
                <div className='game'>
                    <a href='https://jacobosowsky.github.io/Oczko/'>
                        <h4>Oczko</h4>
                        <p>Gra karciana, wzorowana na Black Jack'u, w której gracz musi zdobyć jak największą liczbę punktów (nie większą, niż 21)</p>
                    </a>
                </div>
                
            </div>
     );
}
 
export default GamesListPage;
 