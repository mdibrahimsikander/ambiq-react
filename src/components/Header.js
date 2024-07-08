import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AmbiQ-Logo.png";
import "../styles/Header.css";
import "../styles/responsive.css";


const Header = () => (
  <>
    <div className="hero_area">
      <header className="header_section">
        <div className="header_top">
          <div className="container">
            <div className="contact_nav">
              <a href="tel:+917044542223">
                <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                <span>Call: +91 70445 42223</span>
              </a>
              <a href="mailto:support@ambiq.in">
                <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                <span>Email: support@ambiq.in</span>
              </a>
              <a href="mailto:support@ambiq.in">
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                <span>Kolkata</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="AmbiQ Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/keyfeatures">
                      Key Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  </>
);

export default Header;
