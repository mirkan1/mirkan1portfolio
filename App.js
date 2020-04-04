import React, { Component } from "react";
import { Jumbotron as Jumbo, Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Contact } from './Contact';
import Button from '@bit/nexxtway.react-rainbow.button';
import { NoMatch } from './NoMatch';
import MainPage from './MainPage.js';
import { NavigationBar } from './components/navigationBar';
import firstLayer from './assets/fistLayer.png';
import fifthLayer from './assets/fifthLayer.png';
import logo from './assets/logo.png';

class App extends Component {  
  render() {
  return (
    <>
      <Jumbo fluid className="jumbo" style={{
        background: `url(${firstLayer})`,
        backgroundSize: "cover",
        height: "750px",
        backgroundRepeat: "no-repeat",
      }}>
        <NavigationBar />
        <Container>
          <div className="overlay" style={{ marginTop: "250px", color: "white"}}>
            <Row>
              <Col lg={6} md={6} sm={12} xl={6} xs={12}>
                <h4>COMPREHEMSIVE</h4>
                <h1>Music Data Analytics</h1>
                <p>Monitor Spotify / Apple Music / Deezer playlists, social media, and charts.</p>
                <Button
                  shaded
                  label="Sign up for free"
                  onClick={() => alert('buttonOnFirstLayer!')}
                  variant="success" />
                <Button
                  style={{ marginLeft: 10, color: "white"}}
                  shaded
                  label="Watch video >"
                  onClick={() => alert('buttonOnFirstLayer!')}
                  variant="base" />
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </Jumbo>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Jumbo style={{
        background: `url(${fifthLayer})`,
        backgroundSize: "100% 100%",
        height: "750px",
        backgroundRepeat: "no-repeat",
      }}>
        <div align="center" style={{ marginBottom: "50px"}}>
          <Image src={logo} rounded></Image>
        </div>
        <Row align="center">
          <Col></Col>
          <Col lg={6} md={8} sm={12} xl={6} xs={12}>
            <Row align="center">
              <Col>
                <h7>ABOUT US</h7>
              </Col>
              <Col>
                <h7>CAREERS</h7>
              </Col>
              <Col>
                <h7>SUPPORT</h7>
              </Col>
              <Col>
                <h7>TERMS OF SERVICE</h7>
              </Col>
              <Col>
                <h7>PRIVACY POLICY</h7>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ marginTop: "50px"}}>
          <Col></Col>
          <Col lg={6} md={8} sm={12} xl={6} xs={12}>
            <Row>
              <Col>
                <a href="https://www.twitter.com/mirkanOFmirkan">facebook</a>
              </Col>
              <Col>
                <a href="https://www.twitter.com/mirkanOFmirkan">twitter</a>
              </Col>
              <Col>
                <a href="https://www.twitter.com/mirkanOFmirkan">linkedin</a>
              </Col>
              <Col>
                <a href="https://www.twitter.com/mirkanOFmirkan">something</a>
              </Col>
              <Col>
                <a href="https://www.twitter.com/mirkanOFmirkan">something+</a>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <div align="center" style={{ marginTop: "75px"}}>
        <h7>mirkanbaba1@gmail.com | Made with {"<3"} in New Orleans </h7>
        </div>
      </Jumbo>
    </>
    );
  }
}

export default App;