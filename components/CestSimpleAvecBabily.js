/* eslint-disable no-nested-ternary */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/button-has-type */
import Image from 'next/image';
import styles from './CestSimpleAvecBabily.module.css';

export default function CestSimpleAvecBabily(props) {
  const espace = props;
  console.log(espace);
  return (
    <>
      <div className={styles.containerSimpleBabily}>
        <h3 className={styles.titreSimpleBabily}>C'est simple avec Babily</h3>
        <div className={styles.inlineForm}>
          <div className={styles.form}>
            {espace.pagePro || espace.pageParent ? (
              <p className={styles.ch}>1</p>
            ) : (
              <Image
                src="/images/stylos.svg"
                alt="Picture of the author"
                width={280}
                height={300}
                className={styles.chImg}
              />
            )}
            {espace.pagePro ? (
              <p className={styles.option}>
                <b>Paramétrez </b> vos critères d'accueil
              </p>
            ) : espace.pageParent ? (
              <p className={styles.option}>
                <b>Paramétrez </b> vos informations
              </p>
            ) : (
              <p className={styles.option}>
                <b>Evalue </b> les besoins réels de vos collaborateurs
              </p>
            )}
          </div>
          <div className={styles.form}>
            {espace.pagePro || espace.pageParent ? (
              <p className={styles.ch}>2</p>
            ) : (
              <Image
                src="/images/calendrier_mini.svg"
                alt="Picture of the author"
                width={280}
                height={300}
                className={styles.chImg}
              />
            )}
            {espace.pagePro ? (
              <p className={styles.option}>
                <b>Mettez à jour</b> vos disponibilités
              </p>
            ) : espace.pageParent ? (
              <>
                <p className={styles.option}>
                  <b>Choisissez </b> votre crèche
                </p>
                <p
                  style={{
                    fontSize: '0.9em',
                    maxWidth: '450px',
                    lineHeight: '2rem',
                    margin: '0',
                    textAlign: 'center',
                  }}
                >
                  (à noter que si votre enfant n’est pas dans une crèche il
                  faudrait faire une demande d’acceptation et d’adaptation par
                  celle-ci)
                </p>
              </>
            ) : (
              <p className={styles.option}>
                <b>Réserve </b>auprès des crèches les places adaptées
              </p>
            )}
          </div>
          <div className={styles.form}>
            {espace.pagePro || espace.pageParent ? (
              <p className={styles.ch}>3</p>
            ) : (
              <Image
                src="/images/mail_notif.svg"
                alt="Picture of the author"
                width={280}
                height={300}
                className={styles.chImg}
              />
            )}
            {espace.pagePro ? (
              <p className={styles.option}>
                <b>Recevez et gérez en direct</b> les demandes de réservations
              </p>
            ) : espace.pageParent ? (
              <p className={styles.option}>
                <b>Consultez et reservez</b> instantanément les disponibilités
              </p>
            ) : (
              <p className={styles.option}>
                <b>Met à dispositions</b> des salariés en temps réel et selon
                vos critères d’attribution, les places réservées
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
