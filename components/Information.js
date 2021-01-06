import styles from './Information.module.css';

export default function Information() {
  return (
    <div className={styles.containerInformation}>
      <h3 className={styles.titleInfo}>Besoin d'une information?</h3>
      <p className={styles.paragrapheInfo}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean
        commodo ligula eget dolor. Aenean massa.
        <br /> Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus{' '}
      </p>
      <button type="button" className={styles.buttonInfo}>
        Contactez-nous
      </button>
    </div>
  );
}
