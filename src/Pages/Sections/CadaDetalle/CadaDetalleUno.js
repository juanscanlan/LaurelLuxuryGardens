import img1 from "../../../Assets/Images/CadaDetalle/Img1.jpg";
import img2 from "../../../Assets/Images/CadaDetalle/Img2.jpg";

import styles from "./cadaDetalle.module.scss";

const CadaDetalleUno = () => {
  return (
    <div className={`${styles.container} ${styles.removeMarginBottomMobile}`}>
      <div className={styles.imageContainer}>
        <img className={styles.imageContainer__image} src={img1} />
        <img className={styles.imageContainer__image} src={img2} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.textContainer__title}>Cada Detalle</h3>
        <h4 className={styles.textContainer__subtitle}>
          Los Acabados de tu Departamento
        </h4>
        <ul className={styles.textContainerUl}>
          <li className={styles.textContainerUl__li}>
            Puertas en madera solida de caoba.
          </li>
          <li className={styles.textContainerUl__li}>
            Puertas con bastidor y medio marco. Vistas en triplay de cedro.
            Tinta nogal americano
          </li>
          <li className={styles.textContainerUl__li}>
            Marmol Crema Makiato en mesetas de baño.
          </li>
          <li className={styles.textContainerUl__li}>
            Granito Itaunas en mesetes de cocina.
          </li>
          <li className={styles.textContainerUl__li}>
            1 minisplit estándar de 18,000 BTU para sala,comedor y cocina.
          </li>
          <li className={styles.textContainerUl__li}>
            1 minisplit estándar de 12,000 BTU para cada recamara.
          </li>
          <li className={styles.textContainerUl__li}>Grifería marca Helvex</li>
          <li className={styles.textContainerUl__li}>
            Muebles de baño marca Urrea.
          </li>
          <li className={styles.textContainerUl__li}>
            Pintura vinílica con acabado acuarela y pigmentación estilo chukum.
          </li>
          <li className={styles.textContainerUl__li}>
            Piso porcelánico Interceramic pulido en formato grande 80X80 cms
            rectificado, estilo mármol.
          </li>
          <li className={styles.textContainerUl__li}>
            Parrilla eléctrica y tarja marca Teka.
          </li>
          <li className={styles.textContainerUl__li}>
            Calentador de agua instantáneo eléctrico marca Rheem.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CadaDetalleUno;
