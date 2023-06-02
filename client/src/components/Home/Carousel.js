import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../shared/Card';
import { productsData } from '../../data/productsData';

export default function Carousel() {
  const [limitedItems] = useState(productsData.slice(0, 10));

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
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
            <div key={item.id}>
              <Card item={item} />
            </div>
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