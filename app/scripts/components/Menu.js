/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRequest } from "../apiContext";

const Menu = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const getResults = useRequest()

  const onSearch = (e) => {
    setSearchText(e.target.value);
    getResults(e);
  };
  const onClose = (e) => {
    setShowSearch(false);
    getResults();
  };

  const menuItems = [
    "HOLIDAY",
    "WHAT",
    "PRODUCTS",
    "BESTSELLERS",
    "GOODBYES",
    "STORES",
    "INSPIRATION",
  ];

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            {menuItems.map((item) => (
              <a href="#" key={item} className="nav-item">
                {item}
              </a>
            ))}
            <a href="#" onClick={() => setShowSearch(true)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={`${showSearch ? "showing " : ""} search-container`}>
        <input type="text" onChange={onSearch} value={searchText} />
        <a href="#" onClick={onClose}>
          <i className="material-icons close">close</i>
        </a>
      </div>
    </header>
  );
};

Menu.propTypes = {
  doSearch: PropTypes.func,
};

export default Menu;
