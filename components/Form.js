import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import ReactDOM from 'react-dom';
import Recaptcha from 'react-google-recaptcha';
import { InlineWidget } from 'react-calendly';
import styles from './Form.module.css';

const Form = (props) => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const siteKey = `${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;

  const executeCaptcha = async () => {
    await setIsSubmitting(!isSubmitting);
  };

  const onSubmit = (values) => {
    // setIsSubmitting(true);
    if (isSubmitting) {
      console.log(values);
    }
    setIsSubmitting(false);
  };
  return sujetAPICalendly(sujetForm.sujet) === 'email' ? (
    <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.formTitle}>Envoyez un mail à Babily</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
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
            <option value="crèche">Crèche</option>
            <option value="parent">Parent</option>
            <option value="entreprise">Entreprise</option>
          </select>
        </div>
        <div className={styles.formRightColumn}>
          <textarea
            className={styles.rightInput}
            name="message"
            placeholder="Ecrivez votre message ici"
            ref={register}
          />
        </div>
      </div>
      <input type="submit" className={styles.inputSubmit} />
      <Recaptcha
        // ref={(e) => (recaptchaInstance = e)}
        sitekey={siteKey}
        ref={register}
        size="normal"
        onChange={executeCaptcha}
      />
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
