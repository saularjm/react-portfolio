import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mb-3">
            <span className="navbar-brand mb-1 h1">Saular Moaddeli</span>
            <div className="ml-auto" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
        </div>
      </div>
  </nav>
    );
}

export default Header;