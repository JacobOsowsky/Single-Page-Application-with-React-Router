import React, {Component} from 'react';
import '../styles/PaperScissorsRock.css'
import Paper from '../images/paper.jpg'
import Scissors from '../images/scissors.jpg'
import Rock from '../images/rock.jpg'

class PaperScissorsRock extends Component {

    options = [
        {name: 'papier', url: Paper},
        {name: 'nożyczki', url: Scissors},
        {name: 'kamień', url: Rock},
    ]

    state = {
        playerChoice: '',
        computerChoice: '',
        winner: '',
        gamesNumber: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        isHandChosen: false
    }

    handleSelection=(e)=> {
        const imgs = document.querySelectorAll('.choices img');
        imgs.forEach(img => img.style.boxShadow = '');
        e.target.style.boxShadow = '0 0 0 2px yellow';
        this.setState({
            isHandChosen: true,
            playerChoice: e.target.alt,
            computerChoice: '',
            winner: ''
        })
    
    }

    startGame = () => {
        /*WYMUSZENIE WYBORU*/
        if (!this.state.isHandChosen) {
            return alert("Wybierz dłoń!")
        }
        /*OKREŚLENIE ZWYCIĘZCY*/
        const player = this.state.playerChoice;
        const computer = this.options[Math.floor(Math.random() * this.options.length)].name;
        let result
        if ((player === 'papier' && computer === 'kamień') || (player === 'kamień' && computer === 'nożyczki') || (player === 'nożyczki' && computer === 'papier')){
            result = 'Gracz'
        } else if (player === computer){
            result = 'Remis'
        } else {
            result = 'Komputer'
        }
        /*AKTUALIZACJA STATYSTYK*/
        if (result === 'Gracz'){
            this.setState({
                computerChoice: computer,
                winner: result,
                gamesNumber: this.state.gamesNumber + 1,
                wins: this.state.wins + 1
            })
        }
        if (result === 'Remis'){
            this.setState({
                computerChoice: computer,
                winner: result,
                gamesNumber: this.state.gamesNumber + 1,
                draws: this.state.draws + 1
            })
        }
        if (result === 'Komputer'){
            this.setState({
                computerChoice: computer,
                winner: result,
                gamesNumber: this.state.gamesNumber + 1,
                losses: this.state.losses + 1
            })
        }
        /*RESET WYBORU*/
        const imgs = document.querySelectorAll('.choices img');
        imgs.forEach(img => img.style.boxShadow = '');
        this.setState({
            isHandChosen: false
        })
    }

    

    render(){
        const {playerChoice, computerChoice, winner, gamesNumber, wins, losses, draws} = this.state
        const options = this.options.map(option => <img key={option.name} src={option.url} alt={option.name} onClick={this.handleSelection}></img>)
    return ( 
        <div className="game">
            <h3>Kamień - papier - nożyce</h3>
            <h5>Wybierz</h5>
            <div className='choices'>{options}</div>
            <button onClick={this.startGame}>Zagraj!</button>
            <div className='gameresult'>
                <h5>Wynik rozgrywki</h5>
                <p>Twój wybór: <span>{playerChoice}</span></p>
                <p>Wybór komputera: <span>{computerChoice}</span></p>
                <p>Zwycięzca rundy: <span>{winner}</span></p>
            </div>
            <div className='statistics'>
                <h5>Wyniki</h5>
                <p>Liczba rund: <span>{gamesNumber}</span></p>
                <p>Wygranych: <span>{wins}</span></p>
                <p>Przegranych: <span>{losses}</span></p>
                <p>Remisów: <span>{draws}</span></p>
            </div>
        </div>
     );
    }
}
 
export default PaperScissorsRock;