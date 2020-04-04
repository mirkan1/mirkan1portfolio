import React, { useState } from 'react'
import {  Row, Container, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  #access-info {
    background-color: #fefefe;
    height: 70vh;
    width: 100%;
    border-color: black;
    border-size: 10px;
  }
  .info-button {
    width: auto;
    height: 50px;
  }

  .smallMaker {
    overflow:hidden;
    transition:max-height 0.3s ease-out; // note that we're transitioning max-height, not height!
    height:auto;
    max-height:70vh; // still have to hard-code a value!
  }

`;

export default function InfoPanel() { 
    const [item, itemChange] = useState(true);
    const [inProp, setInProp] = useState(false);
    
    function infoButton() {
        let ele = document.getElementById('access-info');
        //console.log(ele.classList.add(""))
        if (!item) {
          ele.style["max-height"] = "70vh"; 
        } else {
          ele.style["max-height"] = 0; 
        }
        itemChange(!item)
        
    }

    return (
        <Styles>
          <button className="info-button pixel-borders pixel-box--primary" onClick={ () => infoButton()}>Open Panel</button>
          <div id="access-info" className="smallMaker pixel-borders pixel-box--error-custom">
            <Container>
              {/* if small mode, the button is closed*/}
            </Container>
          </div>
        </Styles>
    )
}