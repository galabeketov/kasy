import React, { useState } from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { IoLanguageSharp } from "react-icons/io5";
{
  /* <img src="logo.png" alt="Kasi-logo" height={"25"} /> */
}

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky mainContainer"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand text-uppercase" href="index-1.html">
            <img src="logo.png" alt="kasy-logo" height="25" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto" id="navbar-navlist">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/features")}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/about")}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/pricing")}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/contact")}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className="rounded-circle text-light nav-btn avatar">
                {" "}
                <IoLanguageSharp />{" "}
              </button>
              <div className="me-5 flex-shrink-0 d-none d-lg-block">
                <a
                  className="btn nav-btn btn-primary"
                  onClick={() => navigate("/sign-up")}
                >
                  {" "}
                  Sign Up{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
