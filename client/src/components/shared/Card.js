import React, { useState } from 'react';
import '../../styles/components/card.css'

export default function Card(props) {
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
    <div key={props.item.productName} className="card">
      <div className={props.isShop ? "card-top shop" : "card-top carousel"}>
        <img
          src={
            defaultImage[props.item.productName] === props.item.productName
              ? defaultImage.linkDefault
              : props.item.productImage
          }
          alt={props.item.productName}
          onError={handleErrorImage}
        />
        <div className="card-bottom">
          <h5 className="card-name">{props.item.productName}</h5>
          <div className="card-cart--info">
            <span className="card-price">{props.item.productPrice}</span>
            <button className="card-cart btn-black">Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}