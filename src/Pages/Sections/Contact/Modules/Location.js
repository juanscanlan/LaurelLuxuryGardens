import styles from "./location.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.container__title}>Oficina de ventas</h4>
      <div className={styles.phoneEmail__container}>
        <FontAwesomeIcon
          className={styles.container__phone}
          icon={faLocationDot}
        />
        <span className={styles.phoneEmailSpan}>
          25 South AV & 5 South Street, 77600. Cozumel Quintana Roo
        </span>
      </div>
      <div className={styles.phoneEmail__container}>
        <FontAwesomeIcon className={styles.container__email} icon={faClock} />
        <span className={styles.phoneEmailSpan}>
          Lunes - Domingo: 9 AM - 7 PM
        </span>
      </div>
    </div>
  );
};

export default Location;
