import React, { Component } from 'react';
import "./App.css";
import { Jumbotron as Jumbo, Container, Row, Col, Image } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {Navbar} from './components/Navbar';
import Footer from './components/Footer';
import Privacy from './components/Privacy'
import {Work} from './components/Work';
import backgroundImage from './img/bg3jpg.jpg'
import About from './pages/About';
import styled from 'styled-components';


const Styles = styled.div`
  .fade-transition {
    &-enter {
      opacity: 0;
    }
    &-enter-active {
      opacity: 1;
      transition: opacity 500ms;
    }
    &-exit {
      opacity: 1;
    }
  }

  hr {
    background-color: #efefef;
  }

  a {
    color: #91431F;
    text-decoration: none;
  }

  .Jumbo {
    border: black;
    margin-top: -75px;
    background: url(${backgroundImage}) center top no-repeat fixed;
    margin-bottom: 0;
    background-color: black;
    color: white;
  }

  .divtomove {
    margin-left: auto;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
  }

`;

class App extends Component {
  generateKey = (pre) => {
    return `${ new Date().getTime() }`;
  }

  render() {
    return (
    <Styles>
      <Navbar/>
      <Jumbo className="Jumbo">
        <Container className="divtomove" style={{marginTop: "110px"}}>
        <Router>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={this.generateKey()}
                timeout={200}
                classNames="fade-transition"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Privacy} />
                  <Route path="/about" component={About} />
                  <Route path="/work" component={Work} />
                  <Route path="/privacy" component={Privacy} />
                  <Route component={"NoMatch"} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
        </Container>
      </Jumbo>
      <Footer />
    </Styles>
    )
  }
}

export default App;
