import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'
import Footer from './Footer'
import Clock from '../components/Clock'

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

  switchLight=(e)=> {
    const header = document.querySelector('header');
    const html = document.querySelector('html')
    const blog = document.querySelector('.blog')
    const footer = document.querySelector('footer')
    const clock = document.querySelector('.clock')
    const nav = document.querySelector('aside ul')
    if (e.target.className === 'circle'){
        e.target.className = 'circle night'
        header.style.backgroundColor='#0d1117'
        html.style.backgroundColor='#0d1117'
        blog.style.backgroundColor='#0d1117'
        footer.style.backgroundColor='#0d1117'
        clock.style.backgroundColor='#0d1117'
        nav.style.backgroundColor='#0d1117'
    } else {
        e.target.className = 'circle'
        header.style.backgroundColor='white'
        html.style.backgroundColor='#F0F2F5'
        blog.style.backgroundColor='white'
        footer.style.backgroundColor='white'
        clock.style.backgroundColor='white'
        nav.style.backgroundColor='white'

    }
  }



  render() { 
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>
            <Header/>
          </header>
          <main>
            <aside>
              <Navigation/>
              <div className='switch'>
                <div className='bar'></div>
                <div className='circle' onClick={this.switchLight}></div>
              </div>
              <Clock/>
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
