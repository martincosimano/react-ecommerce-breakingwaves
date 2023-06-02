import React, { useState, useMemo } from "react";
import Sidebar from "../shared/Sidebar";
import Card from "../shared/Card";
import { shopSidebarData } from "../../data/shopSidebardata";
import { productsData } from '../../data/productsData';
import * as ImIcons from "react-icons/im";

function sortItems(items, sortType) {
    if (sortType === "lowToHigh") {
      return [...items].sort((a, b) => parseFloat(a.productPrice.slice(1)) - parseFloat(b.productPrice.slice(1)));
    } else if (sortType === "highToLow") {
      return [...items].sort((a, b) => parseFloat(b.productPrice.slice(1)) - parseFloat(a.productPrice.slice(1)));
    } else {
      return items;
    }
  }

export default function Main() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [productItems] = useState(productsData);

    const [sortType, setSortType] = useState("");
    const sortedItems = useMemo(() => sortItems(productsData, sortType), [productsData, sortType]);

    const handleSortChange = (e) => {
        setSortType(e.target.value);
    };

    return (
        <main className="shop-main">
            <div className="container">
                <div className="shop-container">
                    <Sidebar 
                        sidebar={sidebar}
                        showSidebar={showSidebar}
                        title={'Category'}
                        categories={shopSidebarData}
                        isNav={false}
                    />
                    <div className="shop-products">
                        <div className="products-container">
                            <div className="sidebar-toggle--shop">
                                <ImIcons.ImEqualizer onClick={showSidebar} />
                                <span onClick={showSidebar}>Filter</span>
                            </div>
                            <form className="shop-sort">
                            <select className="select-sort" value={sortType} onChange={handleSortChange}>
                                <option value="">Sort: Relevance</option>
                                <option value="lowToHigh">Sort: Price Low To High</option>
                                <option value="highToLow">Sort: Price High To Low</option>
                            </select>
                            </form>
                            <div className="products--container">

                                <div className="shop-card--container">
                                {sortedItems.map((item) => (
                                <div key={item.id}>
                                    <Card item={item} />
                                </div>
                                ))}
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