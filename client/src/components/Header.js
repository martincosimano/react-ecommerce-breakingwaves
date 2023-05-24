import React from 'react';
// import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="logo-container">
            <a><img src={require("../assets/images/logo.png")} alt=""/></a>
            <span className="logo-text">Breaking Waves</span>
        </div>
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
        </nav>
    </header>
    )
}