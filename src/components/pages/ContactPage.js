import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';
import './ContactPage.css'

class ContactPage extends Component {
    state = {
        value: ''
      }

handleChange=(e)=> {
    this.setState({
        value: e.target.value
    })
}

handleSubmit=(e)=> {
    e.preventDefault();
    this.setState({
        value: ''
    })
}
    render() { 
        return ( 
            <div className='contactPage'>
                <form onSubmit={this.handleSubmit}>
                    <h4>Napisz do nas</h4>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder='Napisz wiadomość'></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                when={this.state.value}
                message='Masz niedokończony formularz. Na pewno chcesz opuścić stronę?'
                />

            </div>
         );
    }
}
 
export default ContactPage;