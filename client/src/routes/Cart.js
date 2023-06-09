import React from 'react';
import CartList from '../components/shared/CartList';
import EmptyCart from '../components/Cart/EmptyCart';
import '../styles/routes/cart.css';

export default function Cart(props) {

    return (
        <main className="cart-main">
            <div className="container">
            {props.totalPrice ? 
              (<div className="split-grid">
                  <div className="cart-items">
                    <div className="cart-category-items">
                        <h5 className="cart-product-title">Product</h5>
                        <h5 className="cart-product-price">Price</h5>
                        <h5 className="cart-product-quantity">Quantity</h5>
                    </div>
                    {Object.entries(props.groupedItems).map(([item, { count, price, smallImg, id }]) => (
                        <CartList
                            key={id}
                            text={`${count} ${item}`}
                            price={`${Number(price * count).toFixed(2)}`}
                            smallImg={smallImg}
                            removeFromCart={() => props.removeFromCart(item)}
                        />
                    ))}
                  </div>
                  <div className="cart-summary">
                    <p className="cartlist-total-price">Total: ${props.totalPrice.toFixed(2)} </p>
                  </div>
                </div>) : 
                (
                <EmptyCart />
                )}
            </div>
        </main>
    )
}