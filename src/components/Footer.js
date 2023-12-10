import React from 'react';
import githubLogo from '../icons/GitHub-Mark-32px.png';
// import facebookLogo from '../icons/facebook.png';
import linkedinLogo from '../icons/linkedin.png';
import twitterLogo from '../icons/twitter.png';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import "../css/fontawesome.all.min.css";

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
      column-gap: auto;
      padding: 1rem 0px;
      justify-content: space-around;
      align-items: center;
    }

    .linkedin {
      margin-left: inherit;
    }

    .footer-b {
      flex-wrap: wrap;

      & > * {
        margin-top: 10px;
        flex-basis: 30%;
      }
    }
    .mail-me {
      flex-wrap: wrap;

      & > * {
        margin-bottom: 10px;
        flex-basis: 50%;
      }

    }


  }

  hr {
    width: 80%;
  }

  .footer-b {
    display: flex;
    padding: 10px 0px;
    margin-bottom: 10px;

      & > * {
        width: 50%;
      }

      img {
        filter: invert(100%);
      }
    }
    .mail-me {
      display: flex;
      direction: row;
      gap-column: 5px;
    }

    @media only screen and (max-width: 700px) {
      .footer-b {
        padding: 1rem 25%;
        & > * {
          margin-top: 10px;
          flex-basis: 50%;
        }
      }      
      .mail-me {
        padding: 0px 1rem;
        & > * {
          margin-bottom: 10px;
          flex-basis: 50%;
        }
      }
    }

    @media only screen and (min-width: 1200px) {
      .footer-b {
        padding: 1rem 25%;
        & > * {
          margin-top: 10px;
          flex-basis: 50%;
        }
      }      
      .mail-me {
        padding: 0px 1rem;
        & > * {
          margin-bottom: 10px;
          flex-basis: 50%;
        }
      }
    }

`

export default function Footer() {
  return (
    <Styles>
      <div className="borderer">
        <div className="copyright-div">
          <div className="footer-b">
            <a href="https://github.com/mirkan1" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;github</a>
            <a href="https://twitter.com/mirkanOFmirkan" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;twitter</a>
            <a className="linkedin" href="https://linkedin.com/in/raqux/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;linkedin</a>
          </div>          
          <hr/>
          <div className="mail-me">
            <div>
              <p><a href="mailto:mirkanbaba1@gmail.com">Mail me <i class="fa fa-mind-share"></i></a></p>
            </div>
            <div>
              <p>Renas Mirkan Kilic © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}
