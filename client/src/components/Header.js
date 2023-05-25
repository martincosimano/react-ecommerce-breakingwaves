import React from 'react';
// import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="logo-container">
            <a href=""><img src={require("../assets/images/logo.png")} alt=""/></a>
            <a href=""><span className="logo-text">Breaking Waves</span></a>
        </div>
        <nav>
            <ul>
                <li><a className="nav-anchor" href="">About</a></li>
                <li><a className="nav-anchor" href="">Shop</a></li>
                <li><a className="nav-anchor" href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
        </nav>
    </header>
    )
}