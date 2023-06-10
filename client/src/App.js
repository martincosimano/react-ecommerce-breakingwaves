import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';
import Header from './components/Header/Header';
import Home from './routes/Home';
import About from './routes/About';
import PreFooter from './components/Footer/PreFooter';
import Footer from './components/Footer/Footer';
import Shop from './routes/Shop';
import Cart from './routes/Cart';

export default function App() {

  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

  function useLocalStorage(key, initialValue) {
    const [value, setValue] = React.useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });
  
    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  }

  function checkItem(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  const groupedItems = React.useMemo(() => {
    return cartItems.reduce((acc, item) => {
      if (acc[item.productName]) {
        acc[item.productName].count += 1;
      } else {
        const price = item.productPrice;
        acc[item.productName] = {
          id: item.id,
          count: 1,
          price: Number(price),
          smallImg: item.productImage,
        };
      }
      return acc;
    }, {});
  }, [cartItems]);

  const totalPrice = Object.values(groupedItems).reduce(
    (total, { count, price }) => total + count * price,
    0
  );

  const removeFromCart = (itemName) => {
    const itemIndex = cartItems.findIndex((item) => item.productName === itemName);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  };


  return (
    <BrowserRouter>
      <Header cartItems={cartItems} groupedItems={groupedItems} totalPrice={totalPrice} removeFromCart={removeFromCart} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home checkItem={checkItem} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop/:category?"
          element={<Shop checkItem={checkItem} />}
        />
        <Route path="/cart" element={<Cart 
        cartItems={cartItems} 
        groupedItems={groupedItems} 
        totalPrice={totalPrice} 
        removeFromCart={removeFromCart}
          />}
        />
      </Routes>
      <PreFooter />
      <Footer />
    </BrowserRouter>
  );
}