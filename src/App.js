import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jumbotron as Jumbo, Row, Container, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { Navbar, routes } from './components/Navbar';
import backgroundImage from './img/bg3jpg.jpg';
import Footer from './components/Footer';
import InfoPanel from './components/InfoPanel';
import styled from 'styled-components';
import './App.css';

function App() {  
  return (
    <Styles>
      <Router>
        <Navbar/>
        <Jumbo className="jumbo">
          <Container style={{marginTop: "110px"}}>
            <Row style={{flexWrap: "wrap"}}>
              <Col>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            </Col>
            <Col lg={5} md={12} sm={12} xl={5} xs={12}>
              <InfoPanel />
            </Col>
            </Row>
          </Container>
        </Jumbo>
      </Router>
      <Footer />
    </Styles>
  )
}

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

  .jumbo {
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