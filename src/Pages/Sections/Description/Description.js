import styles from "./description.module.scss";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.textContainer__title}>
          TU CASA EN EL MEJOR DESTINO DE PLAYA EN COZUMEL
        </h3>
        <p className={styles.textContainer__paragraph}>
          Selvanova Residencial es un desarrollo en Playa del Carmen
          perteneciente a Grupo Velas. Desde hace 8 años, Selvanova se ha
          convertido en uno de los fraccionamientos residenciales más exclusivos
          y de mejor reputación en la Riviera Maya, gracias a su estilo único,
          que combina un entorno natural y moderno, con cómodas amenidades para
          sus residentes. Te invitamos a conocer el Coto 8 y el Coto 9, parte de
          la nueva fase residencial en Selvanova, una excelente opción para
          invertir gracias a su ya demostrada calidad, respaldo, y plusvalía.
        </p>
        <a href="#" className={styles.textContainer__button}>
          Solicita más Información
        </a>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default Description;
