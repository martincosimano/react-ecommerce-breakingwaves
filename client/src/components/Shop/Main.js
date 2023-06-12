import React from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
import Sidebar from "../shared/Sidebar";
import Card from "../shared/Card";
import { shopSidebarData } from "../../data/shopSidebardata";
import { productsData } from '../../data/productsData';
import * as ImIcons from "react-icons/im";

function sortItems(items, sortType) {
  if (sortType === "lowToHigh") {
    return [...items].sort((a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice))
  } else if (sortType === "highToLow") {
    return [...items].sort((a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice))
  } else {
    return items;
  }
}

export default function Shop(props) {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { category } = useParams();
  const [sortType, setSortType] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const location = useLocation();

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setCurrentPage(1);
  };

  const sortedItems = React.useMemo(() => sortItems(productsData, sortType), [sortType]);

  const filteredItems = React.useMemo(() => {
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

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page'));
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
  }, [location.search, totalPages]);

  React.useEffect(() => {
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
                    <Card 
                    key={item.id}
                    item={item} 
                    isShop={true} 
                    checkItem={props.checkItem}
                    />
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