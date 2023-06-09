import React from 'react';
import { Link } from "react-router-dom";
export default function EmptyCart() {
    return (
        <div className="empty-cart">
            <p className="empty-cart--text">There are no items in your cart.</p>
            <Link to="/shop"><button className="empty-cart--button btn-black">Continue Shopping</button></Link>
        </div>
    )
}