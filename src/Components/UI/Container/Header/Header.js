import React from "react";
import "./Header.css";
import filterSrc from "../../../../Assets/Images/Filter.png";
import searchSrc from "../../../../Assets/Images/Search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="title">All Markets</h1>
      </div>
      <div className="header__right">
        <div className="filter">
          <img src={filterSrc} alt="Filters" className="filter__img"/>
          <span className="filter__title">Filters</span>
        </div>
        <div>
          <img src={searchSrc} alt="Search" className="search"/>
          <input className="input" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
