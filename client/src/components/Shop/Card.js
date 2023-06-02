import React from 'react';
import { productsData } from '../../data/productsData';

export default function Card() {
    return (
        <div key={item.productName} className="card">
            <div className="card-top">
                <img
                src={
                defaultImage[item.productName] === item.productName
                ? defaultImage.linkDefault
                : item.productImage
                }
                alt={item.productName}
                onError={handleErrorImage}
                />
                <div className="overlay">
                    <a href="" className="buy-btn">Add to cart</a>
                </div>
                <div className="card-bottom">
                    <h5 className="card-name">{item.productName}</h5>
                    <div className="card-cart--info">
                        <button className="card-cart btn-black">Add to cart</button>
                        <span className="card-price">{item.productPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}