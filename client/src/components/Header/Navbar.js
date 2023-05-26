import React, {useState} from 'react';

export default function Navbar() {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    function updateMenu() {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
    }

    return (
        <div className="nav-container">
            <nav>
                <div className="burger-menu">
                    <div className={burgerClass} onClick={updateMenu}></div>
                    <div className={burgerClass} onClick={updateMenu}></div>
                    <div className={burgerClass} onClick={updateMenu}></div>
                </div>
                <div className="navlist-flex">
                    <ul>
                        <li><a href=""><span className="logo-text">Breaking Waves</span></a></li>
                        <li><a href="" className="nav-anchor"><span>About</span></a></li>
                        <li><a href="" className="nav-anchor"><span>Shop</span></a></li>
                    </ul>
                </div>
                <div className="navlist-flex">
                    <ul>
                        <li><a href="" className="nav-anchor"><span><i className="fa-solid fa-cart-shopping nav-icon"></i></span></a></li>
                        <li><a href="" className="nav-anchor"><span>Log In/Register</span></a></li>
                    </ul>
                </div>
            </nav>

            <div className={menuClass}></div>
        </div>
    )
}