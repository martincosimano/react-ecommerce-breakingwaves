import React from 'react';
import Main from '../components/Home/Main';
import Carousel from '../components/Home/Carousel';
import AboutSection from '../components/Home/AboutSection';
import '../styles/home.css';

export default function Home() {
    return (
        <div>
            <Main />
            <Carousel />
            <AboutSection />
        </div>
    )
}