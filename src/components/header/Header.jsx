import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      <div style={{ position: "fixed", zIndex: "2", width: "100%" }}>
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-white px-2 px-md-5 py-3  boxShadow ${styles.navPosition}`}
        >
          <div className="container-fluid ">
            <Link
              className={`navbar-brand ${styles.logo} l fadeInRight`}
              to="/"
            >
              Bismillah <span className="pink">Beauty</span> Salon
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={expanded ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={` collapse navbar-collapse ${expanded ? "show" : ""} ${
                styles.navbarCollaps
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles["nav-link"]} ${
                      location.pathname === "/" && styles.activePink
                    }`}
                    aria-current="page"
                    to="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles["nav-link"]} ${
                      location.pathname === "/about" && styles.activePink
                    } `}
                    to="/about"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles["nav-link"]} ${
                      location.pathname === "/portfolio" && styles.activePink
                    }`}
                    aria-current="page"
                    to="/portfolio"
                    onClick={handleLinkClick}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles["nav-link"]} ${
                      location.pathname === "/services" && styles.activePink
                    }`}
                    aria-current="page"
                    to="/services"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    className={`text-decoration-none   ${styles.btnBook}  `}
                    aria-current="page"
                    to="/contact"
                    onClick={handleLinkClick}
                  >
                    Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
