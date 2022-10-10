import styles from "./exclusivo.module.scss";

import exclusivoImg from "../../../../Assets/Images/TuHogar/Exclusivo.jpg";
import ubicacionImg from "../../../../Assets/Images/TuHogar/Icons/Ubicacion.png";
import limitadoImg from "../../../../Assets/Images/TuHogar/Icons/Limitado.png";
import diesnoImg from "../../../../Assets/Images/TuHogar/Icons/Diseno.png";

const Exclusivo = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>
        TU HOGAR EN LAUREL LUXURY GARDENS ES
      </h3>
      <span className={styles.container__mobileSpan}>Exclusivo</span>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <span className={styles.imageContainer__span}>Exclusivo</span>
          <img className={styles.imageContainer__image} src={exclusivoImg} />
        </div>
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={ubicacionImg} />
            <span className={styles.featureBox__title}>
              Ubicación Privilegiada
            </span>
            <p className={styles.featureBox__paragraph}>
              Encuéntrate a solo 6 minutos a pie del Mar Caribe
            </p>
          </div>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={limitadoImg} />
            <span className={styles.featureBox__title}>Limitado</span>
            <p className={styles.featureBox__paragraph}>
              Un complejo de únicamente 15 condominios asegura privacidad en tu
              hogar
            </p>
          </div>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={diesnoImg} />
            <span className={styles.featureBox__title}>Diseño de Lujo</span>
            <p className={styles.featureBox__paragraph}>
              Porque primera línea es la única opción
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusivo;
