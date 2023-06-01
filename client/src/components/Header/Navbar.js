import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../Shop/Sidebar";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  
    return (
        <IconContext.Provider value={{ color: "undefined" }}>
          {windowWidth > 640 ? (
            // Display full navigation for wider screens
            <div className="nav-container">
              <div className="logo-container">
              <Link to="/">
                <img src={require("../../assets/images/logo.png")} alt=""/>
              </ Link>
              </div>
              <nav className="nav-header">
                <div className="navlist-flex">
                  <ul className="nav-ul">
                    <li className="logo-hold">
                    <Link to="/">
                      <span className="logo-text">Breaking Waves</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/about">
                      <span className="nav-anchor">About</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/shop">
                      <span className="nav-anchor">Shop</span>
                    </Link>
                    </li>
                  </ul>
                </div>
                <div className="navlist-flex">
                  <ul className="nav-ul">
                    <li>
                      <a href="" className="nav-anchor">Log In/Register</a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor nav-cart"><FaIcons.FaShoppingCart/></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          ) : (
            // Display hamburger menu for screens below 560px
            <div className="navbar">
              <div className="logo-container">
                <a href=""><img src={require("../../assets/images/logo.png")} alt=""/></a>
              </div>
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
              <Sidebar 
                sidebar={sidebar}
                showSidebar={showSidebar}
              />
            </div>
          )}
        </IconContext.Provider>
    );
  }