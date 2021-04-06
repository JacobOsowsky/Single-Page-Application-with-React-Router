import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'

class App extends Component {
  state = { 
    time: 0
   }

  timeCounter = () => {
    this.setState({
    time: this.state.time + 1
    })
  }
    
  componentDidMount(){
    setInterval(this.timeCounter, 1000)
  }



  render() { 
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
            <Header/>
          </header>
          <main>
            <aside>
              <Navigation/>
            </aside>
            <section className="blog">
              <Page/>
            </section>
          </main>
          <footer>
            <Footer timeCounter={this.state.time}/>
          </footer>
        </div>
      </Router>
      );
  }
}
 
export default App;
