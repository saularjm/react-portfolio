import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-3">
            <span className="navbar-brand mb-1 h1">Saular Moaddeli</span>
            <div className="ml-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item">
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
            </a>
          <a className="nav-item">
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
              </a>
        </div>
      </div>
  </nav>
    );
}

export default Header;