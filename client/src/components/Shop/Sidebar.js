import React from "react";
import '../../styles/components/sidebar.css';
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    const [categories] = React.useState(props.categories)

    const categoryElements = categories.map(category => (
            <li className={`category-item ${category.cName}`} key={category.id} onClick={props.showSidebar}>
                <Link to={`${category.path}`}>
                    {props.isNav && category.icon}
                    <span>{category.title}</span>
                </Link>
            </li>
    ))

    return (
        <nav className= {props.sidebar ? `sidebar-container ${props.isNav ? "sidebar-nav" : "shop"} active` : `sidebar-container ${props.isNav ? "sidebar-nav" : "shop"}`}>
            <aside className="aside-container">
                <div className="close-sidebar active">
                    <Link to="#" className={props.isNav ? "close sidebar-nav" : "close shop"}>
                        <AiIcons.AiOutlineClose onClick={props.showSidebar} />
                    </Link>
                </div>
                <h3 className={props.isNav ? "sidebar-title sidebar-nav decorated" : "sidebar-title shop decorated"}>{props.title}</h3>
                <ul className="sidebar-categories">
                    {categoryElements}
                </ul>
            </aside>
        </nav>
    )
}