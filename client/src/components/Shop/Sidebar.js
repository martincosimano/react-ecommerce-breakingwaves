import React from "react";
import '../../styles/components/sidebar.css';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    return (
        <nav className= {props.sidebar ? "sidebar-container shop headernav active" : "sidebar-container shop headernav"}>
            <aside className="aside-container">
                <div className="close-sidebar active">
                    <Link to="#" className="close">
                        <AiIcons.AiOutlineClose onClick={props.showSidebar} />
                    </Link>
                </div>
                <h3 className="sidebar-title shop headernav decorated">Categories</h3>
                <ul className="sidebar-categories">
                    <Link to="#">
                        <li className="category-item shop headernav">T-Shirts</li>
                    </Link>
                    <Link to="#">
                        <li className="category-item shop headernav">Hoodies & Jackets</li>
                    </Link>
                    <Link to="#">
                        <li className="category-item shop headernav">Pants & Sweatpants</li>
                    </Link>
                    <Link to="#">
                        <li className="category-item shop headernav">Accesories</li>
                    </Link>
                    <Link to="#">
                        <li className="category-item shop headernav">Skateboarding</li>
                    </Link>
                </ul>
            </aside>
        </nav>
    )
}