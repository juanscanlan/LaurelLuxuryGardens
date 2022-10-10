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
          <a
            className={styles.contactContainer__text}
            href="https://goo.gl/maps/kr4BVJWRzcjcuZkbA"
            target="_blank"
          >
            Calle 31 Sur 141, Colonos Cuzamil, 77600 San Miguel de Cozumel,
            Q.R., Mexico
          </a>
        </div>
        <div className={styles.contactContainer}>
          <img className={styles.contactContainer__img} src={telImg} />
          <h4 className={styles.contactContainer__title}>Teléfono & Celular</h4>
          <a href="tel:+529871381435" className={styles.contactContainer__text}>
            English +52 987 138 14 35
          </a>
          <a href="tel:+529871112072" className={styles.contactContainer__text}>
            Spanish +52 987 111 20 72
          </a>
        </div>
        <div className={styles.contactContainer}>
          <img className={styles.contactContainer__img} src={correoImg} />
          <h4 className={styles.contactContainer__title}>Correo Electrónico</h4>
          <a
            href="mailto:ventas@laurelluxurygardens.com"
            className={styles.contactContainer__text}
          >
            ventas@laurelluxurygardens.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
