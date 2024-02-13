import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { TransitionGroup } from 'react-transition-group';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Resume from './pages/Resume';
import Work from './pages/Work';
import About from './pages/About';
import './css/style.css';
import './css/App.css';
import './css/hover-min.css';

class App extends Component {  
  render() {
    return (
      <Router>
        <Navbar/>
        <Jumbo className="jumbo">
          <Container style={{ minHeight: "50vh"}}>
            <Route exact path="/resume" component={Resume} >
                <TransitionGroup>
                  <div className="page">
                    <Resume />
                  </div>
                </TransitionGroup>
            </Route>
            <Route exact path="/work" component={Work}>
                <TransitionGroup>
                  <div className="page">
                    <Work />
                  </div>
                </TransitionGroup>
            </Route>
            <Route exact path="/" component={About} >
                <TransitionGroup>
                  <div className="page page-about">
                    <About />
                  </div>
                </TransitionGroup>
            </Route>
            <Route path="/privacy" component={Privacy} />
          </Container>
        </Jumbo>
      <Footer />
      </Router>
  )
}
}

export default App;
