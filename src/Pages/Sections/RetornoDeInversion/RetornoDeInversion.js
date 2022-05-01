import img1 from "../../../Assets/Images/RetornoDeInversion/Img1.jpg";
import img2 from "../../../Assets/Images/RetornoDeInversion/Img2.jpg";

import styles from "./retornoDeInversion.module.scss";

const RetornoDeInversion = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Retorno De Inversion</h3>
      <div className={styles.textContainer}>
        <div className={styles.textBlock}>
          <h4 className={styles.textBlock__title}>Ubicación</h4>
          <p className={styles.textBlock__paragraph}>
            De acuerdo con la Secretaría de Turismo, Cozumel presenta una
            <span className={styles.textBlock__paragraph_bold}>
              <span> </span>
              ocupación hotelera anual de 66%
            </span>
            .
          </p>
        </div>
        <div className={styles.textBlock}>
          <h4 className={styles.textBlock__title}>ROI</h4>
          <p className={styles.textBlock__paragraph}>
            Operando la propiedad bajo un modelo de subrrendamiento, los
            inversionistas pueden esperar un
            <span className={styles.textBlock__paragraph_bold}>
              <span> </span>
              retorno del 12%
              <span> </span>
            </span>
            sobre la inversión.
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageContainer__image1} src={img1} />
        <img className={styles.imageContainer__image2} src={img2} />
      </div>
    </div>
  );
};

export default RetornoDeInversion;
