import React, { useState } from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
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
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
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
