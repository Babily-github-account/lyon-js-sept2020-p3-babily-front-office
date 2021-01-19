import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.formTitle}>Envoyez un email à Babily</h1>
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
              <option value="femme">female</option>
              <option value="homme">male</option>
              <option value="other">other</option>
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
