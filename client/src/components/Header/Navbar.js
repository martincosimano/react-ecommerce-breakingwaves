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
      <div className="container-navbar">
        <IconContext.Provider value={{ color: "undefined" }}>
          {windowWidth > 560 ? (
            // Display full navigation for wider screens
            <div className="nav-container">
              <nav>
                <div className="navlist-flex">
                  <ul>
                    <li>
                      <a href="">
                        <span className="logo-text">Breaking Waves</span>
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor">
                        <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor">
                        <span>Shop</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="navlist-flex">
                  <ul>
                    <li>
                      <a href="" className="nav-anchor">
                        <span>
                          <i className="fa-solid fa-cart-shopping nav-icon"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor">
                        <span>Log In/Register</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          ) : (
            // Display hamburger menu for screens below 560px
            <div className="navbar">
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
      </div>
    );
  }