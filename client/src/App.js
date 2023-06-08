import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';
import Header from './components/Header/Header';
import Home from './routes/Home';
import About from './routes/About';
import PreFooter from './components/Footer/PreFooter';
import Footer from './components/Footer/Footer';
import Shop from './routes/Shop';

export default function App() {

  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function checkItem(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home checkItem={checkItem} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop/:category?"
          element={<Shop checkItem={checkItem} />}
        />
      </Routes>
      <PreFooter />
      <Footer />
    </BrowserRouter>
  );
}