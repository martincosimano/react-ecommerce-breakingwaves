import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import ScrollToTop from './components/shared/ScrollToTop';
import Header from './components/Header/Header';
import Home from './routes/Home';
import About from './routes/About';
import PreFooter from './components/Footer/PreFooter';
import Footer from './components/Footer/Footer';
import Shop from './routes/Shop';
import Cart from './routes/Cart';


// Cart functionality
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

export default function App() {
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);

  function addToCart(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  const groupedItems = React.useMemo(() => {
    const itemCounts = cartItems.reduce((acc, item) => {
      if (acc[item.productName]) {
        acc[item.productName].count += 1;
      } else {
        const { id, productPrice, productImage } = item;
        acc[item.productName] = {
          id,
          count: 1,
          price: Number(productPrice),
          smallImg: productImage,
        };
      }
      return acc;
    }, {});

    return itemCounts;
  }, [cartItems]);

  const totalPrice = Object.values(groupedItems).reduce(
    (total, { count, price }) => total + count * price,
    0
  );

  function removeFromCart(itemName) {
    const itemIndex = cartItems
      .map((item) => item.productName)
      .lastIndexOf(itemName);
  
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
  }

  function sumToCart(item) {
    const updatedItem = {
      id: item.id,
      productName: item.productName,
      productPrice: item.productPrice,
      productImage: item.productImage,
    };

    setCartItems((prevCartItems) => [...prevCartItems, updatedItem]);
  }
  

// Login functionality
const [auth, setAuth] = React.useState(() => {
  const storedAuth = window.localStorage.getItem("auth");
  return storedAuth === "true";
});
const [token, setToken] = React.useState("");
const [userName, setuserName] = React.useState("");

const [popupOpen, setPopupOpen] = React.useState(false);

React.useEffect(() => {
  firebase.auth().onAuthStateChanged((userCred) => {
    if (userCred) {
      setAuth(true);
      window.localStorage.setItem("auth", "true");
      setuserName(userCred.displayName);
      userCred.getIdToken().then((token) => {
        setToken(token);
      });
    } else {
      setAuth(false);
      window.localStorage.setItem("auth", "false");
      setuserName("");
      if (popupOpen) {
        setPopupOpen(false);
      }
    }
  });
}, [popupOpen]);

function loginWithGoogle() {
  if (!popupOpen) {
    setPopupOpen(true);
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true);
          window.localStorage.setItem("auth", "true");
          setuserName(userCred.user.displayName);
        }
        setPopupOpen(false);
      })
      .catch((error) => {
        setPopupOpen(false);
        console.log(error);
      });
  }
}

function logOffWithGoogle() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      setAuth(false);
      window.localStorage.setItem("auth", "false");
      setuserName("");
    });
}

  return (
    <BrowserRouter>
      <Header
        cartItems={cartItems}
        groupedItems={groupedItems}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
        loginWithGoogle={loginWithGoogle}
        logOffWithGoogle={logOffWithGoogle}
        userName={userName}
        auth={auth}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/shop/:category?"
          element={<Shop addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              groupedItems={groupedItems}
              totalPrice={totalPrice}
              removeFromCart={removeFromCart}
              sumToCart={sumToCart}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
      <PreFooter />
      <Footer />
    </BrowserRouter>
  );
}