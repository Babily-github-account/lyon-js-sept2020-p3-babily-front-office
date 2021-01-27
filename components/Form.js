import { useForm } from 'react-hook-form';
import { useState } from 'react';
// import ReactDOM from 'react-dom';
import Recaptcha from 'react-google-recaptcha';
import styles from './Form.module.css';

const Form = (props) => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sujetForm = props;
  const titleSujet = (sujet) => {
    switch (sujet) {
      case 'Email':
        return 'Envoyer un mail à Babily';
      case 'Coffee':
        return 'Prendre un café avec Babily';
      case 'RDV':
        return 'Prendre un rendez-vous avec un agent de Babily';
      case 'Visio':
        return 'Planifier un meeting en Visio';
      default:
        return 'Envoyer un mail à Babily';
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

  // const onVerifyCaptcha = (token) => {
  //   setValue('isRobot', token);
  // };

  // useEffect(() => {
  //   register({ name: 'isRobot' }, { required: true });
  // });
  return (
    <>
      <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formTitle}>{titleSujet(sujetForm.sujet)}</h1>
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
    </>
  );
};

export default Form;
