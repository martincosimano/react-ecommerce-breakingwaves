import React, { useState } from 'react';
import Success from './Success';
import '../../styles/components/card.css'

export default function Card(props) {
  const [defaultImage, setDefaultImage] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault:
        'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685044743/default_kkp3xd.png',
    }));
  };

  function addToCart() {
    props.addToCart(props.item);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  }
  
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
            <span className="card-price">{`$${props.item.productPrice}`}</span>
            <button className="card-cart btn-black" onClick={addToCart}>Cart</button>
          </div>
        </div>
        {showSuccess && <Success isShop={props.isShop} />}
      </div>
    </div>
  );
}