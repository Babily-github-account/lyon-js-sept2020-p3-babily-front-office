/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import {
  faInfoCircle,
  faClock,
  faEuroSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Simulateur.module.css';

export default function Simulateur() {
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
        <p className={styles.etoile}>
          Sur la majorité des structures sous régime PSU*
        </p>

        <p className={styles.etoile}>
          Cette simulation utilise le mode de calcul de la Prestation Service
          Unique (PSU). Elle se base sur des mois comptant 4 semaines et sur des
          journées d'accueil complètes de 10 heures. Elle est indicative, non
          contractuelle et arrondie à l'euro près.
        </p>

        <p className={styles.etoile}>
          (i) : Pour connaître vos revenus annuels net à n-2, vous retrouverez
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
        <div className={styles.cercle4} />
        <div className={styles.criteres}>
          {/* ------------------------------------ CARTE RECHERCHE------------------------------------------- */}
          <form className={styles.criteres} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.critere}>
              <label htmlFor="children" className={styles.critereTitre}>
                Nombres d'enfant(s) à charge
              </label>
              <div className={styles.nbEnfants}>
                <input
                  type="radio"
                  id="one"
                  name="children"
                  value="1"
                  className={styles.demo2}
                  ref={register({ required: true })}
                />
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
                Revenu net annuel{' '}
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className={styles.iconeInfo}
                />
              </label>
              <div className={styles.champ}>
                <input
                  type="number"
                  id="appointments"
                  name="appointments"
                  ref={register({
                    required: 'Merci de compléter ce champ',
                    min: 0,
                  })}
                  className={styles.champSaisie}
                />
                <FontAwesomeIcon
                  icon={faEuroSign}
                  className={styles.iconeEuro}
                />
              </div>
              {errors.appointments && (
                <span className={styles.alertError}>
                  Le revenu doit être renseigné et supérieur à 0.
                </span>
              )}
            </div>
            <div className={styles.critere}>
              <label htmlFor="hours" className={styles.critereTitre}>
                Nombre d'heure(s) de garde par semaine
              </label>
              <div className={styles.champ}>
                <input
                  type="number"
                  id="hours"
                  name="hours"
                  ref={register({
                    required: 'Merci de compléter ce champ',
                    min: 1,
                    max: 99,
                  })}
                  className={styles.champSaisie}
                />{' '}
                <FontAwesomeIcon icon={faClock} className={styles.iconeClock} />
              </div>
              {errors.hours && (
                <span className={styles.alertError}>
                  Le nombre d'heures doit être renseigné et compris entre 1 et
                  99 heures.
                </span>
              )}
            </div>
            <button type="submit" name="calculer" className={styles.calculer}>
              Calculer
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2>Resultat taux d'effort:</h2>
        {/* ------------------------------------ CARTE RESULTAT------------------------------------------- */}
        <div className={styles.criteresResultat}>
          <div className={styles.critere}>
            <h5 className={styles.critereTitreResultat}>Cela vous coûterait</h5>
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

          <button type="button" className={styles.nouveauCalcul}>
            Nouvelle simulation
          </button>
        </div>
      </div>
    </div>
  );
}
