import React, {Component} from 'react';
import './LoginPage.css'

class LoginPage extends Component {
    state = { 
        login: '',
        password: ''
     }

handleLogin=(e)=>{
this.setState({
    login: e.target.value
})
}

handlePassword=(e)=>{
    this.setState({
        password: e.target.value
    })
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.setState({
            login: '',
            password: ''
        })
    }

    render() { 
        return ( 
            <div className="loginPage">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='login'>Wpisz login</label><input id='login' value={this.state.login} onChange={this.handleLogin}></input><br/>
                    <label htmlFor='password'>Wpisz hasło</label><input id='password' value={this.state.password} onChange={this.handlePassword}></input>
                    <button>Zaloguj</button>
                </form>
            </div>
         );
    }
}
 
export default LoginPage;