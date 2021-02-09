import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Recaptcha from 'react-google-recaptcha';
import { InlineWidget } from 'react-calendly';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './Form.module.css';

const Form = (props) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({});
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

  const onSubmit = async (values) => {
    if (isSubmitting) {
      await setMessage(values);
      await setIsOpen(true);
    }
    await setIsSubmitting(false);
  };

  const onCloseModal = () => setIsOpen(false);
  return sujetAPICalendly(sujetForm.sujet) === 'email' ? (
    <>
      <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formTitle}>Envoyez un mail à Babily</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={styles.formColumn}>
            <input
              className={styles.upperInput}
              placeholder="Nom"
              name="name"
              ref={register}
              required
            />
            {errors.nom && (
              <span className={styles.alertError}>Le nom est obligatoire</span>
            )}
            <input
              className={styles.upperInput}
              placeholder="Adresse email"
              name="email"
              ref={register({
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Addresse mail invalide.',
                },
              })}
              required
            />
            {errors.email && (
              <span className={styles.alertError}>{errors.email.message}</span>
            )}
            <select className={styles.upperInput} name="gender" ref={register}>
              <option value="creche">Je suis une Crèche</option>
              <option value="parent">Je suis un Parent</option>
              <option value="entreprise">Je suis une Entreprise</option>
            </select>
            <Recaptcha
              sitekey={siteKey}
              ref={register}
              size="normal"
              onChange={executeCaptcha}
            />
            <textarea
              className={styles.downInput}
              name="message"
              placeholder="Ecrivez votre message ici"
              ref={register}
              required
            />
            {errors.message && (
              <span className={styles.alertError}>Le nom est obligatoire</span>
            )}
          </div>
        </div>
        <input type="submit" className={styles.inputSubmit} />
      </form>
      <Modal open={isOpen} onClose={onCloseModal} center>
        <div>
          {message ? (
            <>
              <h2>Message envoyé</h2>
              <div>
                Par : {message.name} <br />
                Message : <br />
                {message.message}
              </div>
            </>
          ) : (
            <h2>Problème avec le message</h2>
          )}
        </div>
      </Modal>
    </>
  ) : (
    <div className={styles.formContact}>
      <h1 className={styles.formTitle}>Planifiez votre rendez-vous :</h1>
      <InlineWidget
        url={`https://calendly.com/babily-rdv/${sujetAPICalendly(
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
