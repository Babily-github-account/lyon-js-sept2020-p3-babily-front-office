import React from "react";
import "../style/Contact.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import fillevole from "../img/fillevole.jpeg";
import Cafe from "../img/café.png";
import IconeEnvoi from "../img/icone.png";
import Facetime from "../img/facetime.png";
import MainsSerrees from "../img/main.png";
import Mailto from "./MailTo";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { register, handleSubmit, reset: restFrom } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        `https://contact-babily.herokuapp.com/Contact?apiKey=${window.apiKey}`,
        data
      )
      .then(() => {
        alert(`Your message has been successfully sent ${inputs.name}`);
        restFrom();
      })
      .catch(console.error);
  };

  const handleInputChange = (e) => {
    setInputs((newInputs) => ({
      ...newInputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="containerForm">
        <img className="fillevole" src={fillevole} alt="forme jaune 2" />

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="container-bloc1">
            <div className="box1">
              <input
                className="box"
                onChange={(e) => handleInputChange(e)}
                type="text"
                facebook
                id="input-name"
                placeholder="Nom"
                ref={register}
                value={inputs.name}
                name="name"
              />

              <input
                className="box"
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
                value={inputs.email}
                name="email"
                type="email"
                maxLength="50"
                required
                ref={register}
              />
              <input
                className="box"
                onChange={(e) => handleInputChange(e)}
                type="text"
                id="input-subject"
                placeholder="Sujet"
                name="subject"
                ref={register}
                value={inputs.sujet}
              />
            </div>
            <div className="box2">
              <textarea
                className="box"
                onChange={(e) => handleInputChange(e)}
                name="message"
                type="text"
                id="input-message"
                placeholder="Message"
                ref={register}
                value={inputs.message}
              ></textarea>
            </div>
          </div>
          <div className="container-bloc2">
            <div className="box3">
              <select className="box" ref={register}>
                <option value="Parents">Parents</option>
                <option value="Professionnel">
                  Professionnel de la petite enfance
                </option>
                <option selected value="Employeur">
                  Employeur
                </option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          <div className="section-rendezvous">
            <Mailto
              email="email@email.com"
              subject={inputs.subject}
              body="Bonjour Babily! Après consultation de vos offres, je souhaite vous envoyer un mail"
            >
              <img
                src={IconeEnvoi}
                alt="Envoyer un mail"
                title="Envoyer un mail à Babily"
                className="email-share-button"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Prendre un Café"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite vous prendre un café avec un de vos consultants"
            >
              <img
                src={Cafe}
                alt="Prendre un Café"
                title="Prendre un Café avec un consultant de Babily"
                className="email-share-button"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Rendez-vous en Facetime"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite m'entretenir avec vous en Visio"
            >
              <img
                src={Facetime}
                alt="Rendez-vous en Facetime"
                title="Prendre un rendez-vous en Facetime avec Babily"
                className="email-share-button facetime"
              />
            </Mailto>
            <Mailto
              email="email@email.com"
              subject="Prendre un rendez-vous en présentiel avec Babily"
              body="Bonjour Babily! Après consultation de vos offres, je souhaite m'entretenir avec vous en présentiel"
            >
              <img
                src={MainsSerrees}
                alt="Rendez-vous en présentiel"
                title="Rendez-vous en présentiel"
                className="email-share-button mainsserrees"
              />
            </Mailto>
          </div>
          <input
            className="contact-input"
            type="submit"
            value="Envoyer"
            id="input-submit"
          />
        </form>
      </div>
      <div className="contactAnim">
        <div className="press">
          <div className="sheet"></div>
          <div className="roll"></div>
          <div className="sheet"></div>
          <div className="roll"></div>
          <div className="sheet"></div>
          <div className="roll"></div>

          <div className="sheet"></div>
          <div className="sheet"></div>
          <div className="sheet"></div>

          <div className="sheet"></div>
          <div className="sheet"></div>
          <div className="roll"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
