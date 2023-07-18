import React from "react";
import '../../styles/components/sidebar.css';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    const [categories] = React.useState(props.categories);
  
    const categoryElements = categories
      .filter((category) => !(category.title === "Log In/Register"))
      .map((category) => (
        <li className={`category-item ${category.cName}`} key={category.id} onClick={props.showSidebar}>
          <Link to={category.path}>
            {props.isNav && category.icon}
            <span>{category.title}</span>
            {category.title === "Cart" && <span className="cart-items-number">{props.cartItems}</span>}
          </Link>
        </li>
      ));
  
    let accountElement = null;
    if (props.isLogged) {
      accountElement = (
        <li className="category-item sidebar-nav" onClick={props.logOut}>
          <Link to="/">
            <FaIcons.FaUser /><span>Log Out</span>
          </Link>
        </li>
      );
    } else {
      accountElement = (
        <li className="category-item sidebar-nav">
          <Link to="/account">
            <FaIcons.FaUser /><span>Log In/Register</span>
          </Link>
        </li>
      );
    }
  
    return (
      <nav className={props.sidebar ? `sidebar-container ${props.isNav ? "sidebar-nav" : "shop"} active` : `sidebar-container ${props.isNav ? "sidebar-nav" : "shop"}`}>
        <aside className="aside-container">
          <div className="close-sidebar active">
            <Link to="#" className={props.isNav ? "close sidebar-nav" : "close shop"}>
              <AiIcons.AiOutlineClose onClick={props.showSidebar} />
            </Link>
          </div>
          <h3 className={props.isNav ? "sidebar-title sidebar-nav decorated" : "sidebar-title shop decorated"}>{props.title}</h3>
          <ul className="sidebar-categories">
            {categoryElements}
            {props.isNav ? accountElement : null}
          </ul>
        </aside>
      </nav>
    );
  }