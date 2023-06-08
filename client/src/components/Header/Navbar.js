import React from "react";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../shared/Sidebar";
import Dropdown from "../shared/Dropdown";
import { navSidebarData } from "../../data/navSidebardata";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function Navbar(props) {
    const [sidebar, setSidebar] = React.useState(false);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
    const showSidebar = () => setSidebar(!sidebar);
    const [open, setOpen] = React.useState(false);
  
    React.useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
    
    const groupedItems = React.useMemo(() => {
      return props.cartItems.reduce((acc, item) => {
        if (acc[item.productName]) {
          acc[item.productName].count += 1;
        } else {
          const price = item.productPrice;
          acc[item.productName] = {
            count: 1,
            price: Number(price),
            smallImg: item.productImage,
          };
        }
        return acc;
      }, {});
    }, [props.cartItems]);

    const totalPrice = Object.values(groupedItems).reduce(
      (total, { count, price }) => total + count * price,
      0
    );

    const removeFromCart = (itemName) => {
      const updatedCartItems = [...props.cartItems];
      const itemIndex = updatedCartItems.findIndex(
        (item) => item.productName === itemName
      );
    
      if (itemIndex !== -1) {
        updatedCartItems.splice(itemIndex, 1);
        props.setCartItems(updatedCartItems);
      }
    };
  
    return (
        <IconContext.Provider value={{ color: "white" }}>
          {windowWidth > 640 ? (
            // Display full navigation for wider screens
            <div className="nav-container">
              <div className="logo-container">
              <Link to="/">
                <img src={require("../../assets/images/logo.png")} alt=""/>
              </ Link>
              </div>
              <nav className="nav-header">
                <div className="navlist-flex">
                  <ul className="nav-ul header">
                    <li className="logo-hold">
                    <Link to="/">
                      <span className="logo-text">Breaking Waves</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/about">
                      <span className="nav-anchor">About</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/shop">
                      <span className="nav-anchor">Shop</span>
                    </Link>
                    </li>
                  </ul>
                </div>
                <div className="navlist-flex">
                  <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                      {Object.entries(groupedItems).map(([item, { count, price, smallImg }], index) => (
                      <Dropdown
                        key={index}
                        text={`${count} ${item}`}
                        price={`${Number(price * count).toFixed(2)}`}
                        smallImg={smallImg}
                        removeFromCart={() => removeFromCart(item)}
                      />
                      ))}
                      {totalPrice ? (<div>
                        <p className="dropdown-total-price">Total: {`$ ${totalPrice.toFixed(2)}`} </p>
                        <div className="dropdown-go-cart--container">
                          <Link to="/cart" className="dropdown-go-cart">Cart</Link>
                        </div>
                      </div>) : (<p className="dropdown-no-items">There are no items in your cart</p>)}
                  </div>
                  <ul className="nav-ul">
                    <li>
                      <a href="" className="nav-anchor">Log In/Register</a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor nav-cart"><FaIcons.FaShoppingCart/></a>
                      <span className="cart-items-number" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>{props.cartItems.length}</span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          ) : (
            // Display hamburger menu for screens below 560px
            <div className="navbar">
              <div className="logo-container">
              <Link to="/">
                <img src={require("../../assets/images/logo.png")} alt=""/>
              </ Link>
              </div>
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
              <Sidebar 
                sidebar={sidebar}
                showSidebar={showSidebar}
                title={'Breaking Waves'}
                categories={navSidebarData}
                isNav={true}
                cartItems={props.cartItems.length}
              />
            </div>
          )}
        </IconContext.Provider>
    );
  }