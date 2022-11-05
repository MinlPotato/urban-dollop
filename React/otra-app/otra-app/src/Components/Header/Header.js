import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";
import "./Header.css";
import FixedHeader from "./FixedHeader";
import NormalHeader from "./NormalHeader";

function Header() {
  const [fix, setFix] = useState(false);

  function SetFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", SetFixed);

  return fix == false ? (
    //home, contacto, catalogo
    <>
      <NormalHeader />
    </>
  ) : (
    <>
      <NormalHeader />
      <FixedHeader isActive={fix} />
    </>
  );
}

export default Header;
