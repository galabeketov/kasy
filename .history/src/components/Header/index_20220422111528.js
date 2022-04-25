import React, { useState } from "react";
import "./header.scss";
{
  /* <img src="logo.png" alt="Kasi-logo" height={"25"} /> */
}

export default function Header() {
  const [value, setValue] = useState(0);
  return (
    <>
      <nav
        class="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky mainContainer"
        id="navbar"
      >
        <div class="container">
          <a class="navbar-brand text-uppercase" href="index-1.html">
            <img src="logo.png" alt="kasy-logo" height="25" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="mdi mdi-menu"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mx-auto" id="navbar-navlist">
              <li class="nav-item">
                <a class="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <div class="me-5 flex-shrink-0 d-none d-lg-block">
                <a class="btn nav-btn" href="#">
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
