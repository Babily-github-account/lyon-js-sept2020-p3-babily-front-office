import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-reseaux">
          <Link to="/" className="footer-link footer-reseaux-p">
            <p>babily.fr</p>
          </Link>
          <p className="footer-reseaux-icons footer-reseaux-p">
            <AiFillFacebook style={{ fontSize: "30px" }} />
          </p>
          <p className="footer-reseaux-icons footer-reseaux-p">
            <AiFillTwitterCircle style={{ fontSize: "30px" }} />
          </p>
          <p className="footer-reseaux-icons footer-reseaux-p">
            {" "}
            <AiFillInstagram style={{ fontSize: "30px" }} />
          </p>

          <Link className="footer-link footer-reseaux-p" to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="footer-nav">
          <Link className="footer-link" to="/espacepro">
            Espace professionnel
          </Link>
          <Link className="footer-link" to="/espaceparents">
            Espace parents
          </Link>
          <Link className="footer-link" to="/vieprivee">
            Vie privée{" "}
          </Link>
          <Link className="footer-link" to="/mentions">
            Mentions
          </Link>
        </div>
        <div className="footer-adresse">
          <p>66 Cours de la liberté</p>
          <p>69003 Lyon</p>
          <p>Nicolas Lorut</p>
          <p>ecrivez-nous@babily.fr</p>
          <p>06 08 97 02 82</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
