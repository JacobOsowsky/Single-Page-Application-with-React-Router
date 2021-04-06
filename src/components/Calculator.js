import React, {Component} from 'react';
import '../styles/Calculator.css'

class Calculator extends Component {

    buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', '-', '/', '.', '*','C','=','<-']

    state = {
        number: '',
        display: '',
        result: 0,
        operation: '',
        isActive: false
    }

handleClick=(button)=>{
    const {number,display, result, operation, isActive} = this.state;
    /*DODAWANIE*/
    if (button === '+' && isActive === true && (operation === '+' || operation === '')) {
        let currentNumber = number;
        let currentDisplay = display + currentNumber
        if (display[display.length-1] !== '+'){
        currentDisplay = display + currentNumber + '+';
        }
        if (display.includes('=')){
            currentDisplay = result + '+'
        }
        currentNumber = Number(currentNumber);
        const currentResult = result + currentNumber
        this.setState({
            operation: '+',
            display: currentDisplay,
            number: '',
            result: currentResult
        })
    } 
    /*ODEJMOWANIE*/
    if (button === '-' &&  isActive === true && (operation === '-' || operation === '')) {
        let currentNumber = number;
        let currentDisplay = display + currentNumber
        if (display[display.length-1] !== '-'){
            currentDisplay = display + currentNumber + '-';
        }
        if (display.includes('=')){
            currentDisplay = result + '-'
        }
        currentNumber = Number(currentNumber);
        if (result === 0){
            const currentResult = result + currentNumber
            this.setState({
                operation: '-',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        } else {
            const currentResult = result - currentNumber
            this.setState({
                operation: '-',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        }
    }
    /*MNOŻENIE*/
    if (button === '*' &&  isActive === true &&  (operation === '*' || operation === '')) {
        let currentNumber = number;
        let currentDisplay = display + currentNumber
        if (display[display.length-1] !== '*'){
            currentDisplay = display + currentNumber + '*';
        }
        if (display.includes('=')){
            currentDisplay = result + '*'
        }
        currentNumber = Number(currentNumber);
        if (result === 0 || number === ''){
            const currentResult = result + currentNumber
            this.setState({
                operation: '*',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        } else {
            const currentResult = result * currentNumber
            this.setState({
                operation: '*',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        }
    }  
    /*DZIELENIE*/
    if (button === '/' &&  isActive === true &&  (operation === '/' || operation === '')) {
        let currentNumber = number;
        let currentDisplay = display + currentNumber
        if (display[display.length-1] !== '/'){
            currentDisplay = display + currentNumber + '/';
        }
        if (display.includes('=')){
            currentDisplay = result + '/'
        }
        currentNumber = Number(currentNumber);
        if (result === 0 || number === ''){
            const currentResult = result + currentNumber
            this.setState({
                operation: '/',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        } else {
            const currentResult = result / currentNumber
            this.setState({
                operation: '/',
                display: currentDisplay,
                number: '',
                result: currentResult
            })
        }
    }  

    /*WYNIK DZIAŁANIA*/
    else if(button === '=' && number !== ''){
        /*PO DODAWANIU*/
        if(operation === '+'){
            let currentNumber = number;
            const currentDisplay = display + currentNumber + '=';
            currentNumber = Number(currentNumber);
            this.setState({
                display: currentDisplay,
                number: '',
                result: result + currentNumber,
                operation: ''
            })
        }
        /*PO ODEJMOWANIU*/
        if(operation === '-'){
            let currentNumber = number;
            const currentDisplay = display + currentNumber + '=';
            currentNumber = Number(currentNumber);
            this.setState({
                display: currentDisplay,
                number: '',
                result: result - currentNumber,
                operation: ''
            })
        }
        /*PO MNOŻENIU*/
        if(operation === '*'){
            let currentNumber = number;
            const currentDisplay = display + currentNumber + '=';
            currentNumber = Number(currentNumber);
            this.setState({
                display: currentDisplay,
                number: '',
                result: result * currentNumber,
                operation: ''
            })
        }
        /*PO DZIELENIU*/
        if(operation === '/'){
            let currentNumber = number;
            const currentDisplay = display + currentNumber + '=';
            currentNumber = Number(currentNumber);
            this.setState({
                display: currentDisplay,
                number: '',
                result: result / currentNumber,
                operation: ''
            })
        }
    }
    /*UŁAMKI*/
    if (button === '.' && !number.includes('.') && display[display.length-1] !== '='){
        let currentNumber = number
        currentNumber += button
    
        this.setState({
            number: currentNumber,
        })

    }
    /*RESET KALKULATORA*/
    if (button === 'C'){
        this.setState({
            number: '',
            display: '',
            result: 0,
            operation: '',
            isActive: false
        })
    }
    if (button === '<-'){
        let currentNumber = number;
        currentNumber = currentNumber.slice(0, currentNumber.length-1);
        this.setState({
            number: currentNumber
        })
    }
    /*LICZBY*/
    else if(button !== '+' && button !== '-' && button !== '*' && button !== '/' && button !== '.' && button !== '=' && button !== 'C' && number !== '0' && display[display.length-1] !== '=') {
        let currentNumber = number
        currentNumber += button
    
        this.setState({
            number: currentNumber,
            isActive: true
        })
    }
}

    render (){
        const buttons = this.buttons.map(button=> <button onClick={()=>this.handleClick(button)} key={button}>{button}</button>)
        return ( 
            <div className="calculator">
                <div className='lastClick'>{this.state.display}</div>
                <div className='result'>{this.state.result}</div>
                <div className='number'>{this.state.number}</div>
                <div className='interface'>{buttons}</div>
            </div>
     )
    }
}
 
export default Calculator;