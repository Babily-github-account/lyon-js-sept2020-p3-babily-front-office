import { useForm } from 'react-hook-form';
import { InlineWidget } from 'react-calendly';
import styles from './Form.module.css';

const Form = (props) => {
  const sujetForm = props;

  const sujetAPICalendly = (sujet) => {
    switch (sujet) {
      case 'Email':
        return 'email';
      case 'Coffee':
        return 'coffee';
      case 'RDV':
        return '30min';
      case 'Visio':
        return 'visio';
      default:
        return '30min';
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return sujetAPICalendly(sujetForm.sujet) === 'email' ? (
    <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.formTitle}>Envoyer un mail à Babily</h1>
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: '1.2em' }}>
        <div className={styles.formLeftColumn}>
          <input
            className={styles.leftInput}
            placeholder="prenom"
            name="prenom"
            ref={register}
          />
          <input
            className={styles.leftInput}
            placeholder="nom"
            name="nom"
            ref={register}
          />
          <select className={styles.leftInput} name="gender" ref={register}>
            <option value="femme">Femme</option>
            <option value="homme">Homme</option>
          </select>
        </div>
        <div className={styles.formRightColumn}>
          <textarea
            className={styles.rightInput}
            name="message"
            placeholder="Ecrivez votre message ici"
          />
        </div>
      </div>
      <input type="submit" className={styles.inputSubmit} />
    </form>
  ) : (
    <div className={styles.formContact}>
      <h1 className={styles.formTitle}>Planifiez votre rendez-vous :</h1>
      <InlineWidget
        url={`https://calendly.com/autiergilles/${sujetAPICalendly(
          sujetForm.sujet
        )}`}
        styles={{
          height: '1000px',
          width: '100%',
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '-100px',
        }}
      />
    </div>
  );
};

export default Form;
