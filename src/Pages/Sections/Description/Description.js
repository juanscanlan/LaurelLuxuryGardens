import styles from "./description.module.scss";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.textContainer__title}>
          Descubre el Sueño Tropical en Cozumel
        </h3>
        <ul className={styles.textContainer__paragraph}>
          <li>Hogar del segundo arrecife de coral más grande del mundo</li>
          <li>Playas tropicales de arena blanca mundialmente famosas</li>
          <li>Uno de los principales destinos para buséo</li>
          <li>Ambiente pácifico e immerso en la naturaleza</li>
          <li>Moderna infraestructura insular</li>
          <li>Servicios de salud,cuidado personal y equipo de primer nivel</li>
          <li>La cuidad más segura de México</li>
          <li>Nombrada "Isla de la Paz" en 2012</li>
        </ul>
        <a href="#" className={styles.textContainer__button}>
          Solicita más Información
        </a>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default Description;
