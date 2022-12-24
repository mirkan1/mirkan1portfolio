import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { Navbar } from './components/Navbar';
import backgroundImage from './img/bg3jpg.jpg';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Resume from './pages/Resume';
import About from './pages/About';
import Work from './pages/Work';
import { NoMatch } from './pages/NoMatch';
import styled from 'styled-components';
import './css/App.css';
import './css/hover-min.css';

class App extends Component {  
  render() {
    return (
      <Styles>
        <Router>
          <Navbar/>
          <Jumbo className="jumbo">
            <Container style={{marginTop: "110px", minHeight: "60vh"}}>
              <Route exact path="/resume" component={Resume} >
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Resume />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route exact path="/" component={About} >
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <About />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route exact path="/work" component={Work}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Work />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route path="/privacy" component={Privacy} />
              <Route path="/:any" component={NoMatch} />
            </Container>
          </Jumbo>
        </Router>
        <Footer />
    </Styles>
  )
}
}

const Styles = styled.div`
background-color: #202020;
  height: 100vh; 
  
  hr {
    background-color: #efefef;
  }

  a {
    color: #cbad09; //#F7D51D; //#91431F;
    text-decoration: none;
  }

  .jumbo {
    font-family: "Ubuntu", "Roboto";
    border: black;
    margin-top: -75px;
    background: url(${backgroundImage}) center top no-repeat fixed;
    // border-bottom: 5px solid red;
    // border-bottom-left-radius: 200px;
    // border-bottom-right-radius: 200px;
    // text-shadow: 0 0 3px #fff, 0 0 5px #fff;
    margin-bottom: 0;
    background-color: black;
    color: white;
  }
`;

export default App;