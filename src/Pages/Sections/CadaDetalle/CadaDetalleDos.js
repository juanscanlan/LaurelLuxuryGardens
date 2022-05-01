import img3 from "../../../Assets/Images/CadaDetalle/Img3.jpg";
import img4 from "../../../Assets/Images/CadaDetalle/Img4.jpg";

import styles from "./cadaDetalle.module.scss";

const CadaDetalleUno = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3
          className={`${styles.textContainer__title} ${styles.textContainer__hideTitleMobile}`}
        >
          Cada Detalle
        </h3>
        <h4
          className={`${styles.textContainer__subtitle} ${styles.textContainer__hideSubtitleMobile}`}
        >
          Los Acabados de tu Departamento
        </h4>
        <ul className={styles.textContainerUl}>
          <li className={styles.textContainerUl__li}>
            Fijos de cristal templado de 9 mm en regaderas.
          </li>
          <li className={styles.textContainerUl__li}>
            Cancelería fija y corrediza en aluminio color madera texturizado
            marca CUPRUM linea Eurovent serie Premium con mosquiteros corredizos
            y todos los herrajes de línea.
          </li>
          <li className={styles.textContainerUl__li}>
            Ventanas de proyección serie 45 linea Eurovent con cristal tintex
            verde de 6 mm.
          </li>
          <li className={styles.textContainerUl__li}>
            Barandales con Pasamanos redondo de 3” y cristal tintex verde de 10
            mm.
          </li>
          <li className={styles.textContainerUl__li}>
            Tornillería de acero inoxidable.
          </li>
          <li className={styles.textContainerUl__li}>
            Presurizador por unidad.
          </li>
          <li className={styles.textContainerUl__li}>
            Luminarios de alberca con colorescambiantes.
          </li>
          <li className={styles.textContainerUl__li}>
            Acabado tipo chukum marca kimicolor en lobby.
          </li>
          <li className={styles.textContainerUl__li}>
            Piedra Vista Maya en áreascomunes.
          </li>
          <li className={styles.textContainerUl__li}>
            Concreto estampado en estacionamiento.
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.imageContainer__image} src={img3} />
        <img className={styles.imageContainer__image} src={img4} />
      </div>
    </div>
  );
};

export default CadaDetalleUno;
