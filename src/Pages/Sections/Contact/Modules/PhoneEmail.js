import styles from "./phoneEmail.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PhoneEmail = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.container__title}>Teléfono y Correo</h4>
      <div className={styles.phoneEmail__container}>
        <FontAwesomeIcon className={styles.container__phone} icon={faPhone} />
        <div className={styles.phoneContainer}>
          <span className={styles.phoneEmailSpan}>
            English +52 987 138 14 35
          </span>
          <span className={styles.phoneEmailSpan}>
            Spanish +52 987 111 20 72
          </span>
        </div>
      </div>
      <div className={styles.phoneEmail__container}>
        <FontAwesomeIcon
          className={styles.container__email}
          icon={faEnvelope}
        />
        <span className={styles.phoneEmailSpan}>
          laurelluxurygardens@gmail.com
        </span>
      </div>
    </div>
  );
};

export default PhoneEmail;
