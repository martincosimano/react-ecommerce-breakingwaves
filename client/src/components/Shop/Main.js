import React, { useState, useMemo, useEffect } from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
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

export default function Shop() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { category } = useParams();
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setCurrentPage(1);
  };

  const sortedItems = useMemo(() => sortItems(productsData, sortType), [sortType]);

  const filteredItems = useMemo(() => {
    if (category) {
      return sortedItems.filter((item) => item.productCategory === category);
    } else {
      return sortedItems;
    }
  }, [sortedItems, category]);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page'));
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
  }, [location.search, totalPages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
                  {currentItems.map((item) => (
                    <Card item={item} isShop={true} key={item.id} />
                  ))}
                </div>
              </div>
              <div className="container-nav-pagination">
                <nav className="nav-pagination">
                  <ul>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index}>
                        <Link
                          to={`/shop${category ? `/${category}` : ''}?page=${index + 1}`}
                          className={`page-number ${currentPage === index + 1 ? "current" : ""}`}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}
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