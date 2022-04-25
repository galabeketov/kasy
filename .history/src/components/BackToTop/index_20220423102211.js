import React from "react";
import { FaArrowUp } from "react-icons/fa";
export default function BackToTop() {
  return (
    <>
      <button onClick="topFunction()" id="back-to-top">
        <FaArrowUp />
      </button>
    </>
  );
}
