/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
import Cards from './cards';
import styles from './CestSimpleAvecBabily.module.css';

export default function CestSimpleAvecBabily() {
  return (
    <>
      <div className={styles.containerSimpleBabily}>
        <h3 className={styles.titreSimpleBabily}>C'est simple avec Babily</h3>
        {/* <div className={styles.separator} /> */}
        <div className={styles.inlineForm}>
          <div className={styles.form}>
            <p className={styles.ch}>1</p>
            <p className={styles.option}>
              <span className={styles.param}>Paramétrez </span> <br /> vos
              critères critères d'accueil
            </p>
          </div>
          <div className={styles.form}>
            <p className={styles.ch}>2</p>
            <p className={styles.option}>
              <span className={styles.time}>Mettez à jour </span> <br />
              vos vos disponiblités
            </p>
          </div>
          <div className={styles.form}>
            <p className={styles.ch}>3</p>
            <p className={styles.option}>
              <span className={styles.reserve}>
                Recevez et gérez en direct{' '}
              </span>
              <br />
              les demandes de réservations
            </p>
          </div>
        </div>
      </div>
      <div className={styles.containerContact}>
        <p className={styles.bien_etre}>Plus de bien être pour tous !</p>
        <button className={styles.btn}>Contactez-nous !</button>
        <Cards />
      </div>
    </>
  );
}
