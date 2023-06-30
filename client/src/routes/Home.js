import React from 'react';
import Main from '../components/Home/Main';
import Carousel from '../components/Home/Carousel';
import AboutSection from '../components/Home/AboutSection';
import '../styles/routes/home.css';

export default function Home(props) {
    
    return (
        <div>
            <Main />
            <Carousel addToCart={props.addToCart} />
            <AboutSection />
        </div>
    )
}