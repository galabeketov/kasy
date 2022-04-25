import React from "react";
import { FaArrowUp } from "react-icons/fa";
export default function BackToTop() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <button
        onClick={() => topFunction()}
        id="back-to-top"
        style={{ background: "red", width: "30px", height: "20px" }}
      >
        <FaArrowUp style={{ fontSize: "30px" }} />
      </button>
    </>
  );
}
