import styles from "./contact.module.scss";
import PhoneEmail from "./Modules/PhoneEmail";
import SocialMedia from "./Modules/SocialMedia";
import Location from "./Modules/Location";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <h3 className={styles.container__title}>Más Información</h3>
      <span className={styles.container__subtitle}>Metodos convenientes.</span>
      <SocialMedia />
      <PhoneEmail />
      <Location />
    </div>
  );
};

export default Contact;
