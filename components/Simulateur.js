/* eslint-disable spaced-comment */
/*import React, { useState } from 'react';*/
import {
  faInfoCircle,
  faClock,
  faEuroSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*import { useSpring, animated as a } from 'react-spring';*/
import styles from './Simulateur.module.css';

export default function Simulateur() {
  // const [flipped, set] = useState(false);
  // const { transform, opacity } = useSpring({
  //   opacity: flipped ? 1 : 0,
  //   transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 },
  // });

  return (
    <div className={styles.containerSimulateur}>
      <div className={styles.simulateurTexte}>
        <h3 className={styles.titreSimulateur}>
          Estimer le tarif de ma place en crèche
        </h3>
        <p className={styles.simulateurInformation}>
          Tarif émis à titre indicatif
        </p>
        <a
          href="https://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/je-fais-garder-mon-enfant-dans-une-creche-ou-en-microcreche-la-caf-va-t-elle-m-aider#:~:text=Le%20montant%20de%20cette%20aide,pas%2085%20%25%20du%20montant%20total."
          target="_blank"
          rel="noreferrer"
          className={styles.lienPlusDinfos}
        >
          Plus d'informations
        </a>
      </div>
      <div className={styles.simulateur}>
        <div className={styles.cercle1} />
        <div className={styles.cercle2} />
        <div className={styles.cercle3} />
        <div className={styles.criteres}>
          <div className={styles.critere}>
            <h6 className={styles.critereTitre}>
              Nombres d'enfant(s) à charge
            </h6>
            <div className={styles.nbEnfants}>
              <input
                type="button"
                name="one"
                value="1"
                className={styles.chiffreEnfants}
              />
              <input
                type="button"
                name="two"
                value="2"
                className={styles.chiffreEnfants}
              />
              <input
                type="button"
                name="three"
                value="3"
                className={styles.chiffreEnfants}
              />
              <input
                type="button"
                name="four"
                value="4+"
                className={styles.chiffreEnfants}
              />
            </div>
          </div>

          <div className={styles.critere}>
            <h6 className={styles.critereTitre}>
              Revenu net mensuel{' '}
              <FontAwesomeIcon
                icon={faInfoCircle}
                className={styles.iconeInfo}
              />
            </h6>
            <div className={styles.salaire}>
              <input
                type="number"
                name="appointments"
                className={styles.salaireInput}
              />
              <FontAwesomeIcon icon={faEuroSign} className={styles.icones} />
            </div>
          </div>
          <div className={styles.critere}>
            <h6 className={styles.critereTitre}>
              Nombre d'heure(s) de garde par semaine
            </h6>
            <input type="number" name="hours" className={styles.heures} />{' '}
            <FontAwesomeIcon icon={faClock} className={styles.icones} />
          </div>
          <button type="submit" name="calculer" className={styles.calculer}>
            Calculer
          </button>
        </div>
      </div>
    </div>
  );
}
