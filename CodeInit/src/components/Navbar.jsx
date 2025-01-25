import React from "react";
import "../css/Navbar.css"; 

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">TAAS</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#add-product">Add Product</a>
          </li>
          <li>
            <a href="#Cart">Cart</a>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

