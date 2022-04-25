import React from "react";
import { FaArrowUp } from "react-icons/fa";
export default function BackToTop() {
  return (
    <>
      <button onclick="topFunction()" id="back-to-top">
        <i className="mdi mdi-arrow-up"></i>
      </button>
    </>
  );
}
