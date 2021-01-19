/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import {
  faInfoCircle,
  faClock,
  faEuroSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSpring, animated as a } from 'react-spring';
import styles from './Simulateur.module.css';

export default function Simulateur() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const { register, handleSubmit, errors } = useForm({
    mode: 'onTouched',
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.containerSimulateur}>
      <div className={styles.simulateurTexte}>
        <h3 className={styles.titreSimulateur}>
          Estimer le tarif de ma place en crèche
        </h3>
        <p className={styles.simulateurInformation}>
          Tarif émis à titre indicatif
        </p>
        <p>Sur la majorité des structures sous régime PSU*</p>

        <p>
          Cette simulation utilise le mode de calcul de la prestation service
          unique (PSU). Elle se base sur des mois comptant 4 semaines et sur des
          journées d'accueil complètes de 10 heures. Elle est indicative, non
          contractuelle et arrondie à l'euro près.
        </p>

        <p>
          (1) : Pour connaître vos revenus annuels net à n-2, vous retrouverez
          cette information à la case 1AJ et/ou 1BJ de votre déclaration
          d'imposition n-1 des revenus n-2
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
          {/* ------------------------------------ CARTE RECHERCHE------------------------------------------- */}
          <a.div
            className={styles.critereRecherche}
            style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
          >
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
              <div className={styles.heures}>
                <input
                  type="number"
                  name="hours"
                  className={styles.heuresInput}
                />{' '}
                <FontAwesomeIcon icon={faClock} className={styles.icones} />
              </div>
            </div>
            <button type="submit" name="calculer" className={styles.calculer}>
              Calculer
            </button>
          </a.div>

          {/* ------------------------------------ CARTE RESULTAT------------------------------------------- */}
          <a.div
            className={styles.criteresResultat}
            style={{
              opacity,
              transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            }}
          >
            <div className={styles.critere}>
              <h5 className={styles.critereTitreResultat}>
                Cela vous coûterait
              </h5>
              <p className={styles.critereTitre}>
                <span className={styles.resultatEuroHeure}>0.90</span>
                <FontAwesomeIcon
                  icon={faEuroSign}
                  className={styles.icones}
                />{' '}
                /heure
              </p>
              <div className={styles.resultatJour}>
                <p className={styles.critereTitre}>
                  <span className={styles.critereTitreResultat}>soit </span>
                  <span className={styles.resultatEuroJour}> 8</span>
                  <FontAwesomeIcon
                    icon={faEuroSign}
                    className={styles.iconesEuro2}
                  />{' '}
                  /jour
                </p>
              </div>
            </div>
            <Link href="/">
              <a href="" rel="noreferrer" className={styles.choisirCreche}>
                Choisir ma crèche
              </a>
            </Link>

            <button
              type="button"
              className={styles.nouveauCalcul}
              onClick={() => set((state) => !state)}
            >
              Nouvelle simulation
            </button>
          </a.div>
        </div>
      </div>
      {/* ------------------------------------ ESSAI FORMULAIRE ------------------------------------------- */}
      <form className={styles.criteres} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.critere}>
          <h6 className={styles.critereTitre}>Nombres d'enfant(s) à charge</h6>
          <div className={styles.nbEnfants}>
            <input
              type="radio"
              id="one"
              name="children"
              value="1"
              className={styles.demo2}
              ref={register({ required: true })}
            />
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="one">1</label>
            <input
              type="radio"
              id="two"
              name="children"
              value="2"
              className={styles.demo2}
              ref={register({ required: true })}
            />
            <label htmlFor="two">2</label>
            <input
              type="radio"
              id="three"
              name="children"
              value="3"
              className={styles.demo2}
              ref={register({ required: true })}
            />
            <label htmlFor="three">3</label>
            <input
              type="radio"
              id="four"
              name="children"
              value="4+"
              className={styles.demo2}
              ref={register({ required: true })}
            />
            <label htmlFor="four">4+</label>
          </div>
          {errors.children && (
            <span className={styles.alertError}>
              Merci de sélectionner l'une des propositions.
            </span>
          )}
        </div>
        <div className={styles.critere}>
          <label htmlFor="appointments" className={styles.critereTitre}>
            Revenu net mensuel{' '}
            <FontAwesomeIcon icon={faInfoCircle} className={styles.iconeInfo} />
          </label>
          <div className={styles.salaire}>
            <input
              type="number"
              id="appointments"
              name="appointments"
              ref={register({
                required: 'Merci de compléter ce champ',
                min: 0,
              })}
            />
            <FontAwesomeIcon icon={faEuroSign} className={styles.icones} />
          </div>
          {errors.appointments && (
            <span className={styles.alertError}>
              Le revenu doit être renseigné et supérieur à 0.
            </span>
          )}
        </div>
        <div className={styles.critere}>
          <abel htmlFor="hours" className={styles.critereTitre}>
            Nombre d'heure(s) de garde par semaine
          </abel>
          <div className={styles.heures}>
            <input
              type="number"
              id="hours"
              name="hours"
              ref={register({
                required: 'Merci de compléter ce champ',
                min: 1,
                max: 99,
              })}
            />{' '}
            <FontAwesomeIcon icon={faClock} className={styles.icones} />
          </div>
          {errors.hours && (
            <span className={styles.alertError}>
              Le nombre d'heures doit être renseigné et compris entre 1 et 99
              heures.
            </span>
          )}
          <button type="submit" name="calculer" className={styles.calculer}>
            Calculer
          </button>
        </div>
      </form>
    </div>
  );
}
