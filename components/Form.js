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
      console.log(values);
      await setIsOpen(true);
    }
  };

  const onCloseModal = () => setIsOpen(false);
  return sujetAPICalendly(sujetForm.sujet) === 'email' ? (
    <>
      <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formTitle}>Envoyez un mail à Babily</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={styles.formLeftColumn}>
            <input
              className={styles.leftInput}
              placeholder="nom"
              name="nom"
              ref={register}
              required
            />
            {errors.nom && (
              <span className={styles.alertError}>Le nom est obligatoire</span>
            )}
            <input
              className={styles.leftInput}
              placeholder="email"
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
            <select className={styles.leftInput} name="gender" ref={register}>
              <option value="creche">Crèche</option>
              <option value="parent">Parent</option>
              <option value="entreprise">Entreprise</option>
            </select>
            <Recaptcha
              sitekey={siteKey}
              ref={register}
              size="normal"
              onChange={executeCaptcha}
            />
          </div>
          <div className={styles.formRightColumn}>
            <textarea
              className={styles.rightInput}
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
        <h2>Message envoyé</h2>
      </Modal>
    </>
  ) : (
    <div className={styles.formContact}>
      <h1 className={styles.formTitle}>Planifiez votre rendez-vous :</h1>
      <InlineWidget
        url={`https://calendly.com/testag/${sujetAPICalendly(sujetForm.sujet)}`}
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
