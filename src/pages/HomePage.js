import React, {Component} from 'react';
import '../styles/HomePage.css'



class HomePage extends Component {
    state = { 
        txt: ['Witaj na mojej treningowej stronie.', 'Zamieszczam tutaj moje niewielkie projekty w celu rozwijania umiejętności programistycznych.', 'Zapraszam do zapoznania się z napisanymi przeze mnie przykładowymi narzędziami i grami.'],
        letterNumber: -10,
        textNumber: 0,
        text: '',
        isActive: true

     }

     addLetter = () => {
        const {txt, letterNumber, textNumber,text} = this.state;
        if (textNumber <txt.length) {
            if (letterNumber < txt[textNumber].length) {
                this.setState({
                    letterNumber: letterNumber + 1
                })
            }
            if (letterNumber === txt[textNumber].length) {
                setTimeout(()=>{
                    this.setState({
                        text: "",
                        letterNumber: -10,
                        textNumber: textNumber + 1
                    })
                }, 1000)
            }
            if (letterNumber >=0 && letterNumber < txt[textNumber].length) {
                this.setState({
                    text: text + txt[textNumber][letterNumber]
                })
            }
        } else if (textNumber === txt.length) {
            this.setState({
                textNumber: 0
            })
        }
    }

     handleToggle = ()=>{
         this.setState({
             isActive: !this.state.isActive
         })
     }


    cursorAnimation = () => {
        return (
            <span className={this.state.isActive? 'active' : null}>|</span>
        )
    }

    componentDidMount(){
        setInterval(this.handleToggle, 400);
        setInterval(this.addLetter, 40)
    }

    render() { 
        return (
            <>
            <div className="homePage"><span>{this.state.text}</span>{this.cursorAnimation()}</div>
            </>
          );
    }
}
 
export default HomePage;
 
