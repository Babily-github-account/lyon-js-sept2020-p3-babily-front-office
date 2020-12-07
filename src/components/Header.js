import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import BabilylogoSansBaselineCoul from "../img/LOGO/PNG/SansBaseline/BabilylogoSansBaselineCoul.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            className="logo-header"
            src={BabilylogoSansBaselineCoul}
            alt="Babily.fr"
          />
        </Link>
        <div className="nav-login">
          <Link className="a-login" to="/connexion">
            Connectez-Vous
          </Link>
          <Link className="a-signin" to="/inscription">
            S'inscrire
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
