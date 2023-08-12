import React from 'react';
import '../../styles/components/cartlist.css'

export default function CartList(props) {
    return (
        <div className="cartlist-container">
            <img className="cartlist-img" src={props.smallImg} />
            <p className="cartlist-text">{props.item}</p>
            <span className="cartlist-price">{`$ ${props.price}`}</span>
            {props.isCartRoute ? 
            (<div className="quantity-container">
                <div className="quantity">
                    <button className="quantity-minus" onClick={props.removeFromCart}>-</button>
                    <span className="quantity-number" type="number">{props.countItems}</span>
                    <button className="quantity-plus" onClick={props.sumToCart}>+</button>
                </div>
            </div>) :
            <button className="cartlist-button" onClick={props.removeFromCart}>x</button>}
        </div>
    )
}