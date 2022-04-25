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
import { FaArrowUp } from "react-icons/fa";

export default function Main() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <section>
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
        <button onClick={() => topFunction()} id="back-to-top">
          <FaArrowUp style={{ cursor: "pointer" }} />
        </button>
      </section>
    </>
  );
}
