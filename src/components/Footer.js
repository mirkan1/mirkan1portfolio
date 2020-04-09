import React from 'react';
import githubLogo from '../icons/GitHub-Mark-32px.png';
import facebookLogo from '../icons/facebook.png';
import linkedinLogo from '../icons/linkedin.png';
import twitterLogo from '../icons/twitter.png';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .borderer {
    font-family: "Ubuntu","Roboto";
    border-top: 4px black solid;
    background-color: #202020;
  }

  .footer {
      color: #efefef;
      height: auto;
      display: flex;
      flex-direction: row;
  }

  .copyright-div {
    height: auto;
    width: 100%;
    text-align: center;
    color: #efefef;

    & > p {
      padding-bottom: 20px;
    }
  }

  .row1 {
    padding: 2.5rem;
    height: 40%;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    line-height: 1.625;
  }

  .row2 {
    padding: 2.5rem;
    height: 60%;
    text-align: left;
  }

  @media only screen and (max-width: 1000px) {
    .footer {
      display: flex;
      flex-direction: column;
    }

    .footer-b {
      flex-wrap: wrap;

      & > * {
        margin-top: 10px;
        flex-basis: 50%;
      }
    }

    .row2, .row1 {
      text-align: center;
    }

    .row2 {
      padding-top: 0;
    }
  }

  hr {
    width: 80%;
  }

  .footer-b {
    display: flex;
    padding: 0 25%;
    margin-bottom: 10px;

      & > * {
        width: 50%;
      }

      img {
        filter: invert(100%);
      }
    }

    @media only screen and (max-width: 700px) {
      .footer-b {
        padding: 0 20%;
      }
    }

`

export default function Footer() {
  return (
    <Styles>
      <div className="borderer">
        <Container className="footer">
          <div className="row1">
            <h4>About Me</h4>
            <p>I'm Renas Kilic, 
              a freelance web & software developer based in New Orleans. 
              I have been developing and maintaining websites for many years. 
              My aim is to provide businesses and users with the web solutions they require to up their online web presence and improve their profits! 
              I specialise in Web App development.</p>
          </div>
          <div className="row2">
            <h4>Contact Me</h4>
            <p>Mobile: +1 504 6038251</p>
            <p>Email: mirkanbaba1@gmail.com</p>
            <a className="hvr-underline-from-left" href="/privacy">Privacy Policy</a>
          </div>
        </Container>
        <div className="copyright-div">
          <hr/>
          <div className="footer-b">
            <a href="https://github.com/mirkan1" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;github</a>
            <a href="https://www.facebook.com/R.mirkan" target="_blank" rel="noopener noreferrer"><img src={facebookLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;facebook</a>
            <a href="https://twitter.com/mirkanOFmirkan" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;twitter</a>
            <a href="https://linkedin.com/in/raqux/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;linkedin</a>
          </div>
            <p>© 2020 Renas M. Kilic</p>
        </div>
      </div>
    </Styles>
  )
}
