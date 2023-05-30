import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './routes/Home';
import About from './routes/About';
import PreFooter from './components/Footer/PreFooter';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <PreFooter />
      <Footer />
    </BrowserRouter>
  )
}