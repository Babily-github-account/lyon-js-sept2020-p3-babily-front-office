import { animated } from 'react-spring';

import styles from './Modal.module.css';

const Modal = ({ style, closeModal }) => (
  <animated.div style={style} className={styles.modal}>
    <p className={styles.modalContent}>
      Pour connaître vos revenus annuels net à n-2, vous retrouverez cette
      information à la case 1AJ et/ou 1BJ de votre déclaration d'imposition n-1
      des revenus n-2.
    </p>
    <button type="button" className={styles.closeButton} onClick={closeModal}>
      Fermer
    </button>
  </animated.div>
);

export default Modal;
