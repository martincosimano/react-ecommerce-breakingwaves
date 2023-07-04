import React from "react";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../shared/Sidebar";
import CartList from "../shared/CartList";
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
                  <div className={`cartlist-menu ${open ? 'active' : 'inactive'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                      {Object.entries(props.groupedItems).map(([item, { count, price, smallImg, id }]) => (
                      <CartList
                        key={id}
                        item={`x${count} ${item}`}
                        price={`${Number(price * count).toFixed(2)}`}
                        smallImg={smallImg}
                        removeFromCart={() => props.removeFromCart(item)}
                      />
                      ))}
                      {props.totalPrice ? (<div>
                        <p className="cartlist-total-price">Total: ${props.totalPrice.toFixed(2)} </p>
                        <div className="cartlist-go-cart--container">
                          <Link to="/cart" className="cartlist-go-cart">Cart</Link>
                        </div>
                      </div>) : (<p className="cartlist-no-items">There are no items in your cart</p>)}
                  </div>
                  <ul className="nav-ul">
                    <li>
                      <span href="" className="nav-anchor" onClick={!props.auth ? props.loginWithGoogle : props.logOffWithGoogle}>{props.auth ? `Log Out, ${props.userName.split(' ')[0]}` : 'Log In'}</span>
                    </li>
                    <li>
                      <Link to="/cart" className="nav-cart nav-anchor"><FaIcons.FaShoppingCart/></Link>
                      <Link to="/cart"><span className="cart-items-number" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>{props.cartItems.length}</span></Link>
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
                loginWithGoogle={props.loginWithGoogle}
                logOffWithGoogle={props.logOffWithGoogle}
                userName={props.userName}
                auth={props.auth}
              />
            </div>
          )}
        </IconContext.Provider>
    );
  }