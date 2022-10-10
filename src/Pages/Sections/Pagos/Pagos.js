import amanecerImg from "../../../Assets/Images/Pagos/Amanecer.jpg";
import brisaImg from "../../../Assets/Images/Pagos/Brisa.jpg";
import coralImg from "../../../Assets/Images/Pagos/Coral.jpg";

import styles from "./pagos.module.scss";

const Pagos = () => {
  return (
    <div className={styles.container} id="pagos">
      <h2 className={styles.container__title}>Esquema de Pagos</h2>
      <div className={styles.pagosContainer}>
        <img
          alt="esquema de pagos brisa"
          className={styles.pagosContainer__image}
          src={brisaImg}
        />
        <img
          alt="esquema de pagos coral"
          className={styles.pagosContainer__image}
          src={coralImg}
        />
        <img
          alt="esquema de pagos amanecer"
          className={styles.pagosContainer__image}
          src={amanecerImg}
        />
      </div>
    </div>
  );
};

export default Pagos;
