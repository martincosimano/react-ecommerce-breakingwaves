import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../shared/Card';
import { productsData } from '../../data/productsData';

export default function Carousel(props) {
  const [limitedItems] = useState(productsData.slice(0, 9));

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
        },
      },
      {
        breakpoint: 550,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        useTransform: false,
        },
      },
      {
        breakpoint: 374,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-section">
      <div className="container">
        <h2 className="slider-title decorated">Trending Now</h2>
        <Slider {...settings}>
          {limitedItems.map((item) => (
              <Card
              key={item.id} 
              item={item}
              isShop={false}
              addToCart={props.addToCart} 
              />
          ))}
        </Slider>
        <div className="btn-container-carousel">
          <Link to="/shop">
            <button className="btn-black">View all products</button>
          </Link>
        </div>
      </div>
    </section>
  );
}