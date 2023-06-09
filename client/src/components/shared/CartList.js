import React from 'react';
import '../../styles/components/cartlist.css'

export default function CartList(props) {
    return (
        <div className="cartlist-container">
            <img className="cartlist-img" src={props.smallImg} />
            <p className="cartlist-text">{props.text}</p>
            <span className="cartlist-price">{`$ ${props.price}`}</span>
            <button className="cartlist-button" onClick={props.removeFromCart}>x</button>
        </div>
    )
}