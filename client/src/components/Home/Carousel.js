import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from '../../data'

export default function Carousel() {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: false,
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
            breakpoint: 520,
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
          <Slider {...settings}>
              {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
              <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                onError={handleErrorImage}
                />
                <div className="overlay">
                  <a href="" class="buy-btn">Buy Now</a>
                </div>
                <div className="card-bottom">
                  <h5 className="card-title">{item.title}</h5>
                  <span className="card-price">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </section>
    )
}