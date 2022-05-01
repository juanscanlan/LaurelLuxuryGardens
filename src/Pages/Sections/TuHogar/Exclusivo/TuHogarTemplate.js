import styles from "./exclusivo.module.scss";

import exclusivoImg from "../../../../Assets/Images/TuHogar/Exclusivo.jpg";
import ubicacionImg from "../../../../Assets/Images/TuHogar/Icons/Ubicacion.png";
import limitadoImg from "../../../../Assets/Images/TuHogar/Icons/Limitado.png";
import diesnoImg from "../../../../Assets/Images/TuHogar/Icons/Diseno.png";

const Exclusivo = ({
  imageTitle,
  imageFile,
  feature1,
  feature2,
  feature3,
  hideTitleMobile,
}) => {
  console.log(feature1.icon);
  return (
    <div className={styles.container}>
      <h3
        className={`${styles.container__title} ${
          hideTitleMobile ? styles.container__hideTitleMobile : null
        } ? `}
      >
        TU HOGAR EN LAUREL LUXURY GARDENS ES
      </h3>
      <span className={styles.container__mobileSpan}>{imageTitle}</span>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <span className={styles.imageContainer__span}>{imageTitle}</span>
          <img className={styles.imageContainer__image} src={imageFile} />
        </div>
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={feature1.icon} />
            <span className={styles.featureBox__title}>{feature1.title}</span>
            <p className={styles.featureBox__paragraph}>{feature1.paragraph}</p>
          </div>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={feature2.icon} />
            <span className={styles.featureBox__title}>{feature2.title}</span>
            <p className={styles.featureBox__paragraph}>{feature2.paragraph}</p>
          </div>
          <div className={styles.featureBox}>
            <img className={styles.featureBox__icon} src={feature3.icon} />
            <span className={styles.featureBox__title}>{feature3.title}</span>
            <p className={styles.featureBox__paragraph}>{feature3.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusivo;
