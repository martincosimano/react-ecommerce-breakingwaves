import React, { useState } from 'react';
import '../../styles/components/card.css'

export default function Card({ item }) {
  const [defaultImage, setDefaultImage] = useState({});
  
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault:
        'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685044743/default_kkp3xd.png',
    }));
  };

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
          <a href="" className="buy-btn">
            Add to cart
          </a>
        </div>
        <div className="card-bottom">
          <h5 className="card-name">{item.productName}</h5>
          <div className="card-cart--info">
            <span className="card-price">{item.productPrice}</span>
            <button className="card-cart btn-black">Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}