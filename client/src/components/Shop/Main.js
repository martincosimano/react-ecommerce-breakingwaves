import React, { useState, useMemo } from "react";
import { useParams } from 'react-router-dom';
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

  const { category } = useParams();
  const [sortType, setSortType] = useState("");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedItems = useMemo(() => sortItems(productsData, sortType), [sortType]);

  const filteredItems = useMemo(() => {
    if (category) {
      return sortedItems.filter((item) => item.productCategory === category);
    } else {
      return sortedItems;
    }
  }, [sortedItems, category]);

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
                  {filteredItems.map((item) => (
                    <Card item={item} isShop={true} key={item.id} />
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
  );
}