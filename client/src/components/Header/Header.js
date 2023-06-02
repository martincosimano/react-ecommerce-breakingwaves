import React from 'react';
import Navbar from './Navbar';
import '../../styles/components/header.css';

export default function Header() {
    return (
        <header>
        <div className="container">
            <Navbar />
        </div>
    </header>
    )
}