import amanecerImg from "../../../Assets/Images/Pagos/Amanecer.jpg";
import brisaImg from "../../../Assets/Images/Pagos/Brisa.jpg";
import coralImg from "../../../Assets/Images/Pagos/Coral.jpg";

import styles from "./pagos.module.scss";

const Pagos = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Esquema de Pagos</h2>
      <div className={styles.pagosContainer}>
        <img className={styles.pagosContainer__image} src={amanecerImg} />
        <img className={styles.pagosContainer__image} src={brisaImg} />
        <img className={styles.pagosContainer__image} src={coralImg} />
      </div>
    </div>
  );
};

export default Pagos;
