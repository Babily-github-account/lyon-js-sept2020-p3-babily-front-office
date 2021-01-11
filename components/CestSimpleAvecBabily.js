/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
import styles from './CestSimpleAvecBabily.module.css';

export default function CestSimpleAvecBabily() {
  return (
    <div className={styles.containerSimpleBabily}>
      <h3 className={styles.titreSimpleBabily}>C'est simple avec Babily</h3>
      <div className={styles.separator} />
      <div className={styles.inlineForm}>
        <div className={styles.form1}>
          <p className={styles.ch1}>1</p>
          <p className={styles.accueil}>
            <span className={styles.param}>Paramétrez </span> vos critères
            d'accueil
          </p>
        </div>
        <div className={styles.form2}>
          <p className={styles.ch2}>2</p>
          <p className={styles.disponibilite}>
            <span className={styles.time}>Mettez à jour </span>vos disponiblités
          </p>
        </div>
        <div className={styles.form3}>
          <p className={styles.ch3}>3</p>
          <p className={styles.reservation}>
            <span className={styles.reserve}>Recevez et gérez en direct </span>
            les demandes de réservations
          </p>
        </div>
      </div>
      <div>
        <p className={styles.bien_etre}>Plus de bien être pour tous !</p>
      </div>
      <div>
        <button className={styles.btn}>
          <span className={styles.btn_primary}>Contactez-nous !</span>
        </button>
      </div>
      <div>
        <div className={styles.commentaire}>
          <p className={styles.quote}>
            Je fonctionne avec Babily et j'en suis très satisfaite. Les repères
            de l'enfant restent une priorité. Très utile pour les contrats de
            moins de cinq jours par exemple. Cela me demandait beaucoup de
            travail.
          </p>
        </div>
      </div>
      <div>
        <p className={styles.nom}>Sandrine Lepatre</p>
        <p className={styles.gestion}>
          Fondatrice et gestionnaire la petite bulle, Craponne(69 Rhone)
        </p>
        <p className={styles.creche}>Micro-crèche PAJE</p>
      </div>
      <div>
        <p className={styles.temoignage}>
          <a href="temoignages">Voir les témoignages de nos crèches</a>
        </p>
      </div>
    </div>
  );
}
