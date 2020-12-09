import React from 'react';
import '../style/Contact.css';
import {useState} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {EmailIcon, EmailShareButton} from 'react-share';

const Contact = () => {
  const [inputs, setInputs] = useState({
    name:"",
    subject:"",
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
        alert(
          `Your message has been successfully sent ${inputs.name}`
        );
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
    <div>
      <div className="containerForm">
        <h1 className="titre">Contactez-nous</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="bloc1">
            <input
            className="contact-input"
            onChange={(e) => handleInputChange(e)}
            type="text"facebook
            id="input-name"
            placeholder="Nom"
            ref={register}
            value={inputs.name}
            name="name"
          />

          <input
            className="contact-input"
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
            className="contact-input"
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="input-subject"
            placeholder="Sujet"
            name='subject'
            ref={register}
            value={inputs.sujet}
          />
          </div>
          <div className="Bloc2">
          <select className="contact-input" ref={register}>
            
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
          <div className="bloc3">
            <textarea
            className="contact-input"
            onChange={(e) => handleInputChange(e)}
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
            ref={register}
            value={inputs.message}
          ></textarea>
          </div>
          <input  className="contact-input" type="submit" value="Envoyer" id="input-submit" />
          <EmailShareButton url={'https://www.gmail.com/'} className='email-share-button'>
            <EmailIcon size={50} borderRadius={50}></EmailIcon>
          </EmailShareButton>
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

        <form></form>
      </div>
    </div>
  );
};

export default Contact;