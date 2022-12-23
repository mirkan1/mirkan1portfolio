import React, { useState } from 'react'
import styled from 'styled-components';
import rIcon from '../img/react-ico-evenXY.png';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as NavigationBar } from 'react-bootstrap';
// import Blog from '../pages/Blog';
import Work from '../pages/Work';
import Resume from '../pages/Resume';
import About from '../pages/About';

const routes = [
    //{ path: '/', name: 'Home', Component: Home },
    { path: '/', name: 'Home', Component: About },
    { path: '/work', name: 'Previous#works', Component: Work },
    // { path: '/blog', name: 'Blog', Component: Blog },
    { path: '/resume', name: 'Resume', Component: Resume },
    //{ path: '*', name: "NoMatch", Component: NoMatch}
]


function Navbar() {
  
  const [size, sizeChange] = useState(false);
  
  function infoButton() {
    let ele = document.getElementsByClassName('navbar')[0];
    let navbarCollapse = document.getElementsByClassName('navbar-collapse')[0];    
    if (!size) {
      ele.style["max-height"] = "300px";
      navbarCollapse.style["display"] = "block";
      //navbarCollapse.style["position"] = "fixed";
      setTimeout(function(){ 
        navbarCollapse.style["margin-left"] = "60%"; 
        setTimeout(function(){
          navbarCollapse.style["flex-direction"] = "column";
          navbarCollapse.style["align-items"] = "end";
          navbarCollapse.style.removeProperty("margin-left");
          navbarCollapse.style["display"] = "flex";
        }, 375);
      }, 300);
    } else {
      setTimeout(function(){
        navbarCollapse.style["display"] = "none";
        navbarCollapse.style.removeProperty("flex-direction");
        navbarCollapse.style.removeProperty("align-items");
      }, 300);
      ele.style["max-height"] = "125px";
    }
    sizeChange(!size)
  }
  
  return (
    <Styles>
        <NavigationBar expand="md" className="navbar">
          <NavigationBar.Brand href="/">
            <img alt="react icon" className="rnIcon" src={rIcon}></img>
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
                onClick={() => document.getElementById("root").style.width = "100%"}
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

  
  
const Styles = styled.div`
    .nav-link {
      color: #cbad09;
    }
    .navbar {
        font-family: "Ubuntu","Roboto", Arial, sans-serif;
        background-color: #202020;
        color: #E6E6E6;
        max-height: 125px;
        max-width: 100vw;
        positiion: relative;
        display: flex;
        flex-direction: row;
        border-top: 4px black solid;
        border-bottom: 4px black solid;
        margin-bottom: 50px;
        transition: 0.3s ease-out;
        align-items: baseline;
    }

    .rnIcon {
        border: 2px solid #E6E6E6;
        border-radius: 50%;
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
      text-align: right;
      width: fit-content;
      height: 25%;
      text-decoration: none;
      font-size: 1.3rem;

      &:hover {
        color: #afafaf;
      }
    }

    .navbar-collapse {
      display: none;
      transition: margin 500ms ease-in-out;
    }

    @media only screen and (min-width: 767px) {
      .navbar-toggle {
          font-size: 15px;
        }
    }
    @media only screen and (max-width: 767px) {
      .navbar-collapse {
        width: 94vw;
      }
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
  export { Navbar, routes };