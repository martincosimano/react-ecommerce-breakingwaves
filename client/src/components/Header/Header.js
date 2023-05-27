import React from 'react';
import Navbar from './Navbar';
// import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <div className="logo-container">
            <a href=""><img src={require("../../assets/images/logo.png")} alt=""/></a>
        </div>
        <Navbar />
    </header>
    )
}