import React from "react";
import BackToTop from "../../components/BackToTop";
import Footer from "../../components/Footer";
import FooterAlt from "../../components/FooterAlt";
import Header from "../../components/Header";
import About from "../About";
import Contact from "../Contact";
import Counter from "../Counter";
import Feautures from "../Feautures";
import Home from "../Home";
import Pricing from "../Pricing";
import Testimonial from "../Testimonial";
import { Routes } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Routes>
        <Header />
        <Home />
        <Feautures />
        <About />
        <Counter />
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterAlt />
        <BackToTop />
      </Routes>
    </>
  );
}
