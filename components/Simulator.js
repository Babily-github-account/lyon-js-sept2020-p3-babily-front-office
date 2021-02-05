/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTransition, useSpring, animated as a } from 'react-spring';
import Link from 'next/link';
import {
  faInfoCircle,
  faClock,
  faEuroSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import styles from './Simulator.module.css';

export default function Simulator() {
  const [simulatorResult, setSimulatorResult] = useState(0);

  const { register, handleSubmit, errors } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    const nbrChildren = parseInt(data.children);
    const monthlySalary = parseInt(data.appointments) / 12;
    const nbrHours = parseInt(data.hours);

    const calculatedEffortRate = () => {
      if (nbrChildren === 1) {
        return 0.000615;
      }
      if (nbrChildren === 2) {
        return 0.000512;
      }
      if (nbrChildren === 3) {
        return 0.00041;
      }
      if (nbrChildren === 4) {
        return 0.000307;
      }
      return 0;
    };

    const calculattedReferenceSalary = () => {
      if (monthlySalary < 711.62) {
        return 712;
      }
      if (monthlySalary > 5800) {
        return 5800;
      }
      return monthlySalary;
    };

    const result =
      calculattedReferenceSalary() * calculatedEffortRate() * nbrHours;

    setSimulatorResult(result);
  };

  const newSimulation = () => {
    setSimulatorResult(0);
  };

  const [flipped, set] = useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' },
  });

  return (
    <div className={styles.containerSimulator}>
      <div className={styles.simulatorText}>
        <h3 className={styles.titleSimulator}>
          Estimer le tarif de ma place en crèche
        </h3>
        <p className={styles.simulatorInformation}>
          Tarif émis à titre indicatif
        </p>
        <p className={styles.star}>
          Sur la majorité des structures sous régime PSU*
        </p>

        <p className={styles.star}>
          Cette simulation utilise le mode de calcul de la Prestation Service
          Unique (PSU). Elle se base sur des mois comptant 4 semaines et sur des
          journées d'accueil complètes de 10 heures. Elle est indicative et non
          contractuelle.
        </p>
        <a
          href="https://www.caf.fr/allocataires/droits-et-prestations/connaitre-vos-droits-selon-votre-situation/je-fais-garder-mon-enfant-dans-une-creche-ou-en-microcreche-la-caf-va-t-elle-m-aider#:~:text=Le%20montant%20de%20cette%20aide,pas%2085%20%25%20du%20montant%20total."
          target="_blank"
          rel="noreferrer"
          className={styles.linkMoreInfos}
        >
          Plus d'informations
        </a>
      </div>

      <div className={styles.simulator}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
        <div className={styles.circle4} />
        <div
          className={styles.criterias}
          onSubmit={() => set((state) => !state)}
        >
          {/* ------------------------------------ CARTE RECHERCHE------------------------------------------- */}
          {simulatorResult <= 0 ? (
            <a.div className={styles.searchCriterias}>
              <form
                className={styles.criterias}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.criteria}>
                  <label htmlFor="children" className={styles.criteriaTitle}>
                    Nombres d'enfant(s) à charge
                  </label>
                  <div>
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
                      value="4"
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
                <div className={styles.criteria}>
                  <label
                    htmlFor="appointments"
                    className={styles.criteriaTitle}
                  >
                    Revenu net annuel{' '}
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className={styles.iconInfo}
                      onClick={() => setModalVisible(true)}
                    />
                    {transitions.map(
                      ({ item, key, props: style }) =>
                        item && (
                          <Modal
                            style={style}
                            closeModal={() => setModalVisible(false)}
                            key={key}
                          />
                        )
                    )}
                  </label>
                  <div className={styles.field}>
                    <input
                      type="number"
                      id="appointments"
                      name="appointments"
                      ref={register({
                        required: 'Merci de compléter ce champ',
                        min: 0,
                      })}
                      className={styles.fieldEntry}
                    />
                    <FontAwesomeIcon
                      icon={faEuroSign}
                      className={styles.iconEuro}
                    />
                  </div>
                  {errors.appointments && (
                    <span className={styles.alertError}>
                      Le revenu doit être renseigné et supérieur à 0.
                    </span>
                  )}
                </div>
                <div className={styles.criteria}>
                  <label htmlFor="hours" className={styles.criteriaTitle}>
                    Nombre d'heure(s) de garde par semaine
                  </label>
                  <div className={styles.field}>
                    <input
                      type="number"
                      id="hours"
                      name="hours"
                      ref={register({
                        required: 'Merci de compléter ce champ',
                        min: 1,
                        max: 60,
                      })}
                      className={styles.fieldEntry}
                    />{' '}
                    <FontAwesomeIcon
                      icon={faClock}
                      className={styles.iconClock}
                    />
                  </div>
                  {errors.hours && (
                    <span className={styles.alertError}>
                      Le nombre d'heures doit être renseigné et compris entre 1
                      et 60 heures.
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  name="calculate"
                  className={styles.calculate}
                >
                  Calculer
                </button>
              </form>
            </a.div>
          ) : (
            <a.div
              style={{
                transform,
              }}
            >
              {/* ------------------------------------ CARTE RESULTAT-------------------------------------------  */}
              <div className={styles.criteriasResultat}>
                <div className={styles.criteria}>
                  <h5 className={styles.criteriaTitleResult}>
                    Cela vous coûterait
                  </h5>
                  <p className={styles.criteriaTitle}>
                    <span className={styles.resultEuroHour}>
                      {(simulatorResult / 10).toFixed(2)}{' '}
                    </span>
                    <FontAwesomeIcon
                      icon={faEuroSign}
                      className={styles.icones}
                    />{' '}
                    /heure
                  </p>
                  <div className={styles.dayResult}>
                    <p className={styles.criteriaTitle}>
                      <span className={styles.criteriaTitleResult}>soit </span>
                      <span className={styles.dayEuroResult}>
                        {simulatorResult.toFixed(2)}
                      </span>
                      <FontAwesomeIcon
                        icon={faEuroSign}
                        className={styles.iconsEuro2}
                      />
                      /jour
                    </p>
                  </div>
                </div>
                <Link href="/">
                  <a href="" rel="noreferrer" className={styles.chooseNursery}>
                    Choisir ma crèche
                  </a>
                </Link>

                <button
                  onClick={newSimulation}
                  type="button"
                  className={styles.newCalculation}
                >
                  Nouvelle simulation
                </button>
              </div>
            </a.div>
          )}
        </div>
      </div>
    </div>
  );
}
