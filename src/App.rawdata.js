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
  background-color: #202020;
  height: 100vh;

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
    // border-bottom: 5px solid red;
    // border-bottom-left-radius: 200px;
    // border-bottom-right-radius: 200px;
    // text-shadow: 0 0 3px #fff, 0 0 5px #fff;
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
  
  // @keyframes example {
  //   from {margin-left: 200px;}
  //   to {margin-left: -1000px;}
  // }

`;

// const AnimatedSwitch = withRouter(({ location }) => (
//   <TransitionGroup>
//     <CSSTransition 
//       key={location.key} 
//       classNames="slide" 
//       timeout={1000}
//     >
//       <Switch>
//       <Route exact path="/" component={Home} />
//               <Route path="/about" component={About} />
//               <Route path="/contact" component={Contact} />
//               <Route component={NoMatch} />
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup>
// ));

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
                timeout={500}
                classNames="fade"
                unmountOnExit
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
