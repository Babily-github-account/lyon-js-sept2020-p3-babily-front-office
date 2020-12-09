import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div>
      <div classname="containerForm">
        <h1 className="titre">Contactez-nous</h1>
        <form className="form">
          <input type="text" id="input-name" placeholder="Nom" />
          <input type="email" id="input-email" placeholder="Adresse email" />
          <input type="text" id="input-subject" placeholder="Sujet" />

          <select>
            <option value="Parents">Parents</option>
            <option value="Professionnel">
              Professionnel de la petite enfance
            </option>
            <option selected value="Employeur">
              Employeur
            </option>
            <option value="Autre">Autre</option>
          </select>
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>

          <input type="submit" value="Envoyer" id="input-submit" />
        </form>
      </div>
      <div className="contactAnim">
        <div class="press">
          <div class="sheet"></div>
          <div class="roll"></div>
          <div class="sheet"></div>
          <div class="roll"></div>
          <div class="sheet"></div>
          <div class="roll"></div>

          <div class="sheet"></div>
          <div class="sheet"></div>
          <div class="sheet"></div>

          <div class="sheet"></div>
          <div class="sheet"></div>
          <div class="roll"></div>
        </div>

        <form></form>
      </div>
    </div>
  );
};

export default Contact;
