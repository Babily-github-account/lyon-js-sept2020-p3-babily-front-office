/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Contact.module.css';
import Form from './Form';

const Contact = () => {
  const [isForm, setIsForm] = useState(false);

  const handleTextOnMouse = (e, n, text) => {
    const pContact = document.createElement('p');
    pContact.innerHTML += text;
    pContact.setAttribute('id', `p${text}`);
    pContact.style.position = 'absolute';
    pContact.style.color = '#FA6870';
    pContact.style.opacity = '1';
    pContact.style.zIndex = '2';
    pContact.style.bottom = '40px';
    pContact.style.left = '42px';
    pContact.style.fontSize = '1.5em';
    pContact.style.fontWeight = 'bold';
    pContact.style.pointerEvents = 'none';
    e.relatedTarget.childNodes[n].append(pContact);
  };
  const handleTextMouseLeave = (text) => {
    const element = document.querySelector(`#p${text}`);
    if (element) {
      element.parentNode.removeChild(element);
    }
  };
  return (
    <div className={styles.contactFormContainer}>
      {!isForm ? (
        <div>
          <h1 className={styles.titleContact}>Contactez-nous</h1>
          <div className={styles.contactContainer}>
            <div
              className={styles.iconsContact}
              onMouseEnter={(e) => handleTextOnMouse(e, 0, 'Email')}
              onMouseLeave={() => handleTextMouseLeave('Email')}
              onClick={() => setIsForm(!isForm)}
            >
              <Image
                src="/images/paperPlane.png"
                alt="logo avion"
                width={150}
                height={150}
              />
            </div>

            <div
              className={styles.iconsContact}
              onMouseEnter={(e) => handleTextOnMouse(e, 1, 'Coffee')}
              onMouseLeave={() => handleTextMouseLeave('Coffee')}
              onClick={() => setIsForm(!isForm)}
            >
              <Image
                src="/images/coffee.png"
                alt="logo coffee"
                width={150}
                height={150}
              />
            </div>

            <div
              className={styles.iconsContact}
              onMouseEnter={(e) => handleTextOnMouse(e, 2, 'RDV')}
              onMouseLeave={() => handleTextMouseLeave('RDV')}
              onClick={() => setIsForm(!isForm)}
            >
              <Image
                src="/images/hands.png"
                alt="logo hands"
                width={150}
                height={150}
              />
            </div>

            <div
              className={styles.iconsContact}
              onMouseEnter={(e) => handleTextOnMouse(e, 3, 'Visio')}
              onMouseLeave={() => handleTextMouseLeave('Visio')}
              onClick={() => setIsForm(!isForm)}
            >
              <Image
                src="/images/facetime.png"
                alt="logo facetime"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerForm}>
          <span className={styles.closeForm} onClick={() => setIsForm(!isForm)}>
            X Annuler
          </span>
          <Form isForm />
        </div>
      )}
    </div>
  );
};

export default Contact;
