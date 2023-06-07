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
          const price = (item.productPrice.replace("$", ""));
          acc[item.productName] = {
            count: 1,
            price: isNaN(price) ? 0 : price,
            smallImg: item.productImage,
          };
        }
        return acc;
      }, {});
    }, [props.cartItems]);
  
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
                  <ul className="nav-ul">
                    <li>
                      <a href="" className="nav-anchor">Log In/Register</a>
                    </li>
                    <li>
                      <a href="" className="nav-anchor nav-cart"><FaIcons.FaShoppingCart/></a>
                      <span className="cart-items-number" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>{props.cartItems.length}</span>
                      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                      {Object.entries(groupedItems).map(([item, { count, price, smallImg }], index) => (
                      <Dropdown
                        key={index}
                        text={`x${count} ${item}`}
                        price={`$ ${Number(price) * count}`}
                        smallImg={smallImg}
                      />
                      ))}
                      </div>
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