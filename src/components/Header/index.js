import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-3">
            <span className="navbar-brand mb-1 h1">Saular Moaddeli</span>
            <div className="ml-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <button className="nav-item bg-info">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
            </button>
          <button className="nav-item bg-info">
          <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
              </button>
        </div>
      </div>
  </nav>
    );
}

export default Header;