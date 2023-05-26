import React from 'react';
// import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="logo-container">
            <a href=""><img src={require("../../assets/images/logo.png")} alt=""/></a>
        </div>

        <button className="mobile-nav-toggle">
            <span>Menu</span>
        </button>

        <nav>
            <div className="navlist-flex">
                <ul>
                    <li><a href=""><span className="logo-text">Breaking Waves</span></a></li>
                    <li><a href="" className="nav-anchor"><span>About</span></a></li>
                    <li><a href="" className="nav-anchor"><span>Shop</span></a></li>
                </ul>
            </div>

            <div className="navlist-flex">
                <ul>
                    <li><a href="" className="nav-anchor"><span><i className="fa-solid fa-cart-shopping nav-icon"></i></span></a></li>
                    <li><a href="" className="nav-anchor"><span>Log In/Register</span></a></li>
                </ul>
            </div>

        </nav>
    </header>
    )
}