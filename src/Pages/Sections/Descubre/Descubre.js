import descubreImg from "../../../Assets/Images/Descubre/Descubre.png";

import styles from "./descubre.module.scss";

const Descubre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.imgContainer__img} src={descubreImg} />
        <h3 className={styles.imgContainer__text}>
          Paraíso interior y exterior
        </h3>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.textContainer__title}>
          Descubre el sueño Tropical en Cozumel
        </h4>
        <ul className={styles.textContainerUl}>
          <li className={styles.textContainerUl__li}>
            Hogar del segundo arrecife de coral más grande del mundo
          </li>
          <li className={styles.textContainerUl__li}>
            Playas tropicales de arena blanca mundialmente famosas
          </li>
          <li className={styles.textContainerUl__li}>
            Uno de los principales destinos para bucéo
          </li>
          <li className={styles.textContainerUl__li}>
            Ambiente pácifico e immerso en la naturaleza
          </li>
          <li className={styles.textContainerUl__li}>
            Moderna infraestructura insular
          </li>
          <li className={styles.textContainerUl__li}>
            Servicios de salud,cuidado personal y equipo de primer nivel
          </li>
          <li className={styles.textContainerUl__li}>
            La cuidad más segura de México
          </li>
          <li className={styles.textContainerUl__li}>
            Nombrada "Isla de la Paz" en 2012
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Descubre;
