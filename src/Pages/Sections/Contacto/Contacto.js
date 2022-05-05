import showroomImg from "../../../Assets/Images/Contacto/Showroom.png";
import telImg from "../../../Assets/Images/Contacto/Tel.png";
import correoImg from "../../../Assets/Images/Contacto/Correo.png";

import styles from "./contacto.module.scss";

const Contacto = () => {
  return (
    <div className={styles.container} id="contacto">
      <h3 className={styles.container__title}>Datos de Contacto</h3>
      <div className={styles.contentContainer}>
        <div className={styles.contactContainer}>
          <img className={styles.contactContainer__img} src={showroomImg} />
          <h4 className={styles.contactContainer__title}>Showroom</h4>
          <p className={styles.contactContainer__text}>
            25 South AV & 5 South Street, 77600. Cozumel Quintana Roo.
          </p>
        </div>
        <div className={styles.contactContainer}>
          <img className={styles.contactContainer__img} src={telImg} />
          <h4 className={styles.contactContainer__title}>Teléfono & Celular</h4>
          <p className={styles.contactContainer__text}>
            English +52 987 138 14 35
            <br />
            Spanish +52 987 111 20 72
          </p>
        </div>
        <div className={styles.contactContainer}>
          <img className={styles.contactContainer__img} src={correoImg} />
          <h4 className={styles.contactContainer__title}>Correo Electrónico</h4>
          <p className={styles.contactContainer__text}>
            laurelluxurygardens@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
