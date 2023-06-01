import React, { useState } from "react";
import '../../styles/shop.css'
import * as ImIcons from "react-icons/im";

export default function Main() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <main className="shop-main">
            <div className="container">
                <div className="shop-container">
                    {/* SIDEBAR COMPONENT */}
                    <div className= {sidebar ? "sidebar-container active" : "sidebar-container"}>
                        <aside className="aside-container">
                            <h3 className="sidebar-title decorated">Categories</h3>
                            <ul className="sidebar-categories">
                                <li className="category-item"><a href="">T-Shirts</a></li>
                                <li className="category-item"><a href="">Hoodies & Jackets</a></li>
                                <li className="category-item"><a href="">Pants & Sweatpants</a></li>
                                <li className="category-item"><a href="">Accesories</a></li>
                                <li className="category-item"><a href="">Skateboarding</a></li>
                            </ul>
                        </aside>
                    </div>
                    {/* SIDEBAR COMPONENT */}

                    <div className="shop">
                        <div className="products-container">
                            <div className="toggle-sidebar">
                                <ImIcons.ImEqualizer onClick={showSidebar} />
                                <span onClick={showSidebar}>Filter</span>
                            </div>
                            <form className="shop-sort">
                                <select className="select-sort">
                                    <option>Sort: Price Low To High</option>
                                    <option>Sort: Price Hight To Low</option>
                                </select>
                            </form>
                            <div className="products--container">
                                <div className="shop-card--container">

                                {/* CARD COMPONENT  */}
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card shop-card">
                                        <div className="card-top">
                                            <img src={require('../../assets/images/test.png')} alt =" "/>
                                            <div className="overlay">
                                                <a href="" class="buy-btn">Add to cart</a>
                                            </div>
                                            <div className="card-bottom">
                                                <h5 className="card-name">BRUTIA HOODIE</h5>
                                                <div className="card-cart--info">
                                                    <button className="card-cart btn-black">Add to cart</button>
                                                    <span className="card-price">$26</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* CARD COMPONENT  */}
                                </div>

                            </div>
                            <div className="container-nav-pagination">
                                <nav className="nav-pagination">
                                    <ul className="page-numbers nav-pagination links text-center">
                                        <li><span className="page-number current">1</span></li>
                                        <li><span className="page-number current">2</span></li>
                                        <li><span className="page-number current">3</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}