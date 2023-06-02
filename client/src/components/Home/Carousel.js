import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { productsData } from '../../data/productsData';

export default function Carousel() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
          ...prev,
          [data.target.alt]: data.target.alt,
          linkDefault: "https://res.cloudinary.com/dx5ndnahy/image/upload/v1685044743/default_kkp3xd.png",
        }));
      };

    return (
        <section className="slider-section">
          <div className="container">
            <h2 className="slider-title decorated">Trending Now</h2>
            <Slider {...settings}>
                {productsData.map((item) => (
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
            ))}
            </Slider>
            <div className="btn-container-carousel">
              <Link to="/shop"><button className="btn-black">View all products</button></Link>
            </div>
          </div>
        </section>
    )
}