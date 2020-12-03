import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
               <img src="./img/LOGO/PNG/" alt="Babily.fr" />{" "}
        </Link>
      </header>
    </>
  );
};

export default Header;
