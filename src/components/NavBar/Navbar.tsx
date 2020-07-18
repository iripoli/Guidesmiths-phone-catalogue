import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="container">
      <li className="list-item">
        <Link to="/" className="navbar__option">
          Home
        </Link>
      </li>
      <li>
        <Link to="/catalogue" className="navbar__option">
          Catalogue
        </Link>
      </li>
      <li>
        <Link to="/ratings" className="navbar__option">
          Ratings
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
