import React, { Component } from 'react'
import styled from 'styled-components';
import rIcon from '../img/react-ico.png';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Privacy from '../components/Privacy';
import Work from '../pages/Work';
import About from '../pages/About';

const routes = [
    { path: '/', name: 'Home', Component: Privacy },
    { path: '/about', name: 'About', Component: About },
    { path: '/work', name: 'Work', Component: Work },
    { path: '/privacy', name: 'Privacy', Component: Privacy },
]

const Styles = styled.div`
    .navbar {
        background-color: #202020;
        color: #E6E6E6;
        height: 120px;
        positiion: relative;
        display: flex;
        flex-direction: row;
        border-top: 4px black solid;
        border-bottom: 4px black solid;
        //margin-bottom: 15px;
    }

    .rnIcon {
        height: 80px;
        transition: 3s;

        &:hover {
            transform: rotate(360deg);
        }
    }

    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        transition-duration: 0.3s;
        transition-property: transform;
    }
    
    .hvr-grow:hover,
    .hvr-grow:focus,
    .hvr-grow:active {
        transform: scale(1.1);
    }

    .navTitles{
        width: 500px;
        display: flex;
        flex-flow: row nowrap;
        flex-direction: row-reverse;
        align-items: flex-start;

        & > a {
            width: 25%;
            height: 25%;
            align-items: right;
            color: #E6E6E6;
            text-decoration: none;
            text-align: center;
        }
    }

    @media only screen and (max-width: 700px) {
        .navTitles {
            max-width: 300px;
        }
    }
`;

class Navbar extends Component {
  render() {
    return (
      <Styles>
        <div className="navbar">
        <a href="/">
            <img className="rnIcon" src={rIcon}></img>
        </a>
        <div className="navTitles">
          {routes.map(route => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))}
          {/* <a href="/" className="hvr-grow"><h5>Home</h5></a>
          <a href="/about" className="hvr-grow"><h5>About</h5></a>
          <a href="/work" className="hvr-grow"><h5>Work</h5></a> */}
          </div>
        </div>
      </Styles>
    )
  }
}

export { Navbar, routes };