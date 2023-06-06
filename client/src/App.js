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
    // Retrieve cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  React.useEffect(() => {
    // Update localStorage when cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  function checkItem(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    // You can also add any additional logic, such as checking for duplicate items or updating item quantities.
  }

  return (
    <BrowserRouter>
      <Header cartItems={cartItems.length} />
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