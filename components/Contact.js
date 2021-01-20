import Image from 'next/image';

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1 className={styles.titleContact}>Contactez-nous</h1>
      <div className={styles.contactContainer}>
        <div className={styles.iconsContact}>
          <a>
            <Image
              src="/images/paperPlane.png"
              alt="logo avion"
              width={150}
              height={150}
            />
          </a>
        </div>

        <div className={styles.iconsContact}>
          <a>
            <Image
              src="/images/coffee.png"
              alt="logo coffee"
              width={150}
              height={150}
            />
          </a>
        </div>

        <div className={styles.iconsContact}>
          <a>
            <Image
              src="/images/hands.png"
              alt="logo hands"
              width={150}
              height={150}
            />
          </a>
        </div>

        <div className={styles.iconsContact}>
          <a>
            <Image
              src="/images/facetime.png"
              alt="logo facetime"
              width={150}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
