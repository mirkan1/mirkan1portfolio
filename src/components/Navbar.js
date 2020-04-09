import React, { useState } from 'react'
import styled from 'styled-components';
import rIcon from '../img/react-ico.png';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as NavigationBar } from 'react-bootstrap';
import Blog from '../pages/Blog';
import Work from '../pages/Work';
import About from '../pages/About';

const routes = [
    //{ path: '/', name: 'Home', Component: Home },
    { path: '/', name: 'Home', Component: About },
    { path: '/work', name: 'Work', Component: Work },
    { path: '/blog', name: 'Blog', Component: Blog },
    //{ path: '*', name: "NoMatch", Component: NoMatch}
]

const Styles = styled.div`
    .navbar {
        font-family: "Ubuntu","Roboto";
        background-color: #202020;
        color: #E6E6E6;
        height: 300px;
        max-height: 100px;
        positiion: relative;
        display: flex;
        flex-direction: row;
        border-top: 4px black solid;
        border-bottom: 4px black solid;
        margin-bottom: 50px;
        transition max-height 0.3s ease-out;
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
      display: realtive;
      width: 500px;
      display: flex;
      flex-flow: row nowrap;
      flex-direction: row-reverse;
      align-items: flex-start;
    }

    .nav-item a {
      width: 25%;
      height: 25%;
      align-items: right;
      color: #E6E6E6;
      text-decoration: none;
      text-align: center;
      font-size: 20px;

      &:hover {
        color: #afafaf;
      }
    }

    .navbar-collapse {
      margin: 0;
      transition: margin 1000ms ease-in-out;
    }

    @media only screen and (min-width: 767px) {
      // .navbar-collapse {
      //   margin: 0;
      //   transition: margin 1000ms ease-in-out;
      // }
      .navbar-toggle {
          font-size: 15px;
        }
    }
    @media only screen and (max-width: 767px) {
      .navbar-toggle > a {
          font-size: 15px;
        }
    }

    @media only screen and (max-width: 500px) {
      .navbar-toggler {
          max-width: 200px;
      }
    }

    @media only screen and (max-width: 360px) {
      .navbar-toggler {
          max-width: 180px;
          margin-right: 5px;
      }

      .rnIcon {
        height: 55px;
      }
    }

    .navbar-toggler {
      border-color: white;//rgba(255, 255, 255, 0.5);
      background-color: white;//rgba(255, 255, 255, 0.5);
    }

`;

function Navbar() {
  
  const [size, sizeChange] = useState(false);

  function infoButton() {
    let ele = document.getElementsByClassName('navbar')[0];
    let navbarCollapse = document.getElementsByClassName('navbar-collapse')[0];
    
    if (!size) {
      ele.style["max-height"] = "300px";
      setTimeout(function(){ 
        navbarCollapse.style["margin"] = "0 0 0 75%"; 
      }, 100);
      // navbarCollapse.style["align-items"] = "flex-end";
    } else {
      ele.style["max-height"] = "100px"; 
      navbarCollapse.style["margin"] = "0"
      // navbarCollapse.style["display"] = "none";
    }
    sizeChange(!size)
  }

    return (
      <Styles>
        <NavigationBar expand="md" className="navbar">
          <NavigationBar.Brand href="/">
              <img className="rnIcon" src={rIcon}></img>
          </NavigationBar.Brand>

          <NavigationBar.Toggle aria-controls="basic-navbar-nav" onClick={() => infoButton()}/>
          <NavigationBar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {routes.map(route => (
              <Nav.Item>

              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
              >
                {route.name}
              </Nav.Link>
              </Nav.Item>
            ))}
          </NavigationBar.Collapse>
        </NavigationBar>
      </Styles>
    )
}

export { Navbar, routes };