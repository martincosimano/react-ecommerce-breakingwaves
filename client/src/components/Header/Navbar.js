import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebardata";
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
                <a href=""><img src={require("../../assets/images/logo.png")} alt=""/></a>
              </div>
              <nav>
                <div className="navlist-flex">
                  <ul>
                    <li className="logo-hold"><a href=""><span className="logo-text">Breaking Waves</span></a>
                    </li>
                    <li><a href="" className="nav-anchor">About</a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor">Shop</a>
                    </li>
                  </ul>
                </div>
                <div className="navlist-flex">
                  <ul>
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
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span className="sidebar-span">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          )}
        </IconContext.Provider>
    );
  }