import React, { useState } from 'react'
import {  Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  #access-info {
    font-family: "Ubuntu", "Roboto";
    background-color: rgba(32, 32, 32, .7);
    height: 40vh;
    width: 100%;
    border-color: black;
    border-size: 10px;
  }
  .info-button {
    width: auto;
    height: 50px;
    color: rgb(23,23,23);
    text-align: center;
    padding-bottom: 40px; 
  }

  .smallMaker {
    color: ##FFFFFF;
    overflow: hidden;
    transition max-height 0.3s ease-out; // note that we're transitioning max-height, not height!
    height: auto;
    max-height: 11.8vh;
  }

  .ver-hr {
    border:         none;
    border-left:    1px solid hsla(200, 10%, 50%,100);
    height:         20vh;
    width:          1px;
  }

  .myBox--light {
    border-style: solid;
    border-width: 5px;
    border-color: #202020;
    border-image-slice: 2;
    //border-image-width: 1;
    //border-image-outset: 0;
    border-image-source: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 2h2v2H0zM2 0h2v2H2zM4 2h2v2H4zM2 4h2v2H2z' fill='%23cccccc' /></svg>");
    //position: relative;
    //background-color: transparent;
  }

  .info-header {
    display: flex;
    flex-rirection: row;
    margin-bottom: 20px;
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: 1000px) {

    .info-button {
      padding-bottom: 0;
      padding: 10px;
    }
  }

`;

export default function InfoPanel() { 
    const [item, itemChange] = useState(false);
    //const [inProp, setInProp] = useState(false);
    
    function infoButton() {
        let ele = document.getElementById('access-info');
        //console.log(ele.classList.add(""))
        if (!item) {
          ele.style["max-height"] = "40vh"; 
        } else {
          ele.style["max-height"] = "11.8vh"; 
        }
        itemChange(!item)
    }

    return (
        <Styles>
          <div id="access-info" className="smallMaker pixel-borders myBox--light">
            <Container>
            <Row className="info-header">
              <h5 style={{ flexBasis: "70%", textAlign: "left", margin: "auto", paddingBottom: "20px"}}>Data Center</h5>
              <p style={{ zIndex: 1, flexBasis: "30%"}} className="info-button pixel-borders pixel-box--light" onClick={ () => infoButton()}>{item ? "Close" : "Open"}</p>
            </Row>
            <hr />
            <Row>
              <Col>
                <p>Last visit country</p>
                <p>Total visit this week</p>
                <p>Uptime</p>
              </Col>
              <div className="ver-hr"></div>
              <Col style={{textAlign: "center"}}>
                <p>N/A</p>
                <p>N/A</p>
                <p>N/A</p>
              </Col>
            </Row>
            {/* if small mode, the button is closed*/}
            </Container>
          </div>
        </Styles>
    )
}