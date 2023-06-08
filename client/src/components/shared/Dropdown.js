import React from 'react';
import '../../styles/components/dropdown.css'

export default function Dropdown(props) {
    return (
        <div className="dropdown-container">
            <img className="dropdown-img" src={props.smallImg} />
            <p className="dropdown-text">{`x${props.text}`}</p>
            <span className="dropdown-price">{`$ ${props.price}`}</span>
            <button className="dropdown-button" onClick={props.removeFromCart}>x</button>
        </div>
    )
}