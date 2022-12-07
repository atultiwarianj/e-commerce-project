import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLuggageCart } from 'react-icons/fa';  
import { GiHamburgerMenu } from 'react-icons/gi';
import "./Navbar.css";
// FaLuggageCart
const Navbar = () => {
 const [showMediaIcon, setShowMediaIcon]= useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st Logo Part */}
        <div className="logo">
          <h2>
            <span>S</span>hopping
          </h2>
        </div>
        {/* 2nd Menu Part */}
        <div className= {showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Product">
              Product
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
              contact
              </NavLink>
            </li>
          </ul>
        </div>
      

      {/* Add to Cart */}
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <NavLink exact to="/">
             <FaLuggageCart className="cart"/>
            </NavLink>
          </li>
        </ul>
        {/* hamburger menu */}
        <div className="hamburger-menu">
        <NavLink exact to="/" onClick={()=>setShowMediaIcon(!showMediaIcon)}>
             <GiHamburgerMenu className="cart"/>
            </NavLink>
        
        </div>
      </div>
</nav>

      {/* herro Section */}
      <div className="hero-section">
        <h2>Atul Tiwari</h2>
      </div>
    </>
  );
};

export default Navbar;
