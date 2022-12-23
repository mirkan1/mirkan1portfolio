import React from 'react';
import githubLogo from '../icons/GitHub-Mark-32px.png';
// import facebookLogo from '../icons/facebook.png';
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
    -webkit-box-align: center;
    column-gap: 10rem;
    padding: 2rem;
    justify-content: space-around;
    align-items: center;
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



  h4 {
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    line-height: 1.625;
  }



  @media only screen and (max-width: 1000px) {
    .footer {
      color: #efefef;
      height: auto;
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      column-gap: 10rem;
      padding: 2rem;
      justify-content: space-around;
      align-items: center;
    }

    .linkedin {
      margin-left: 4rem;
    }

    .footer-b {
      flex-wrap: wrap;

      & > * {
        margin-top: 10px;
        flex-basis: 50%;
      }
    }


  }

  hr {
    width: 80%;
  }

  .footer-b {
    display: flex;
    padding: 1rem 25%;
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
            <p>I'm Developing, maintaining, and updating software applications.</p>
          </div>
          <div className="row2">
            <p><a href="mailto:mirkanbaba1@gmail.com">Mail me about anything</a></p>
            <a className="hvr-underline-from-left" href="/privacy" hidden>Privacy Policy</a>
          </div>
        </Container>
        <div className="copyright-div">
          <hr/>
          <div className="footer-b">
            <a href="https://github.com/mirkan1" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;github</a>
            <a href="https://twitter.com/mirkanOFmirkan" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;twitter</a>
            <a className="linkedin" href="https://linkedin.com/in/raqux/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;linkedin</a>
          </div>
            <p>Renas Mirkan Kilic © 2022</p>
        </div>
      </div>
    </Styles>
  )
}
