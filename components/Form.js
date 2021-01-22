import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

const Form = (props) => {
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

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formTitle}>{titleSujet(sujetForm.sujet)}</h1>
        <div
          style={{ display: 'flex', flexDirection: 'row', fontSize: '1.2em' }}
        >
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
    </>
  );
};

export default Form;
