import React from 'react';
import Navbar from './Navbar';
import '../../styles/components/header.css';

export default function Header(props) {
    return (
        <header>
        <div className="container">
            <Navbar cartItems={props.cartItems} groupedItems={props.groupedItems} totalPrice={props.totalPrice} removeFromCart={props.removeFromCart} />
        </div>
    </header>
    )
}