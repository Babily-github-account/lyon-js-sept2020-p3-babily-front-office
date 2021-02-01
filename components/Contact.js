/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Contact.module.css';
import Form from './Form';

const Contact = () => {
  const [isForm, setIsForm] = useState(false);
  const [sujet, setSujet] = useState('');
  const [titleSujet, setTitleSujet] = useState('');

  const handleTextMouse = (text) => {
    setTitleSujet(text);
  };
  return (
    <div className={styles.contactFormContainer}>
      {!isForm ? (
        <div>
          <h1 className={styles.titleContact}>Contactez-nous</h1>
          <div className={styles.contactContainer}>
            <div
              className={styles.iconsContact}
              onMouseEnter={() => handleTextMouse('Email')}
              onMouseLeave={() => handleTextMouse('')}
              onClick={() => {
                setSujet('Email');
                setIsForm(!isForm);
              }}
            >
              <Image
                src="/images/paperPlane.png"
                alt="logo avion"
                width={150}
                height={150}
              />
              {titleSujet === 'Email' ? (
                <p className={styles.pContact}>{titleSujet}</p>
              ) : null}
            </div>

            <div
              className={styles.iconsContact}
              onMouseEnter={() => handleTextMouse('Café')}
              onMouseLeave={() => handleTextMouse('')}
              onClick={() => {
                setSujet('Coffee');
                setIsForm(!isForm);
              }}
            >
              <Image
                src="/images/coffee.png"
                alt="logo coffee"
                width={150}
                height={150}
              />
              {titleSujet === 'Café' ? (
                <p className={styles.pContact}>{titleSujet}</p>
              ) : null}
            </div>

            <div
              className={styles.iconsContact}
              onMouseEnter={() => handleTextMouse('RDV')}
              onMouseLeave={() => handleTextMouse('')}
              onClick={() => {
                setSujet('RDV');
                setIsForm(!isForm);
              }}
            >
              <Image
                src="/images/hands.png"
                alt="logo hands"
                width={150}
                height={150}
              />
              {titleSujet === 'RDV' ? (
                <p className={styles.pContact}>{titleSujet}</p>
              ) : null}
            </div>
            <div
              style={{
                backgroundColor: '#0575A5',
                borderRadius: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className={styles.iconsContact}
              onMouseEnter={() => handleTextMouse('Visio')}
              onMouseLeave={() => handleTextMouse('')}
              onClick={() => {
                setSujet('Visio');
                setIsForm(!isForm);
              }}
            >
              <Image
                src="/images/facetime.png"
                alt="logo facetime"
                width={100}
                height={100}
              />
              {titleSujet === 'Visio' ? (
                <p className={styles.pContact}>{titleSujet}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerForm}>
          <span
            className={styles.closeForm}
            onClick={() => {
              setIsForm(!isForm);
              handleTextMouse('');
            }}
          >
            X Annuler
          </span>
          <Form sujet={sujet} />
        </div>
      )}
    </div>
  );
};

export default Contact;
