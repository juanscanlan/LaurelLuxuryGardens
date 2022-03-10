import styles from "./houseNames.module.scss";

const HouseNames = (props) => {
  const currentTowerTab = props.currentTowerTab;

  const torreBosqueCasasJSX = (
    <div className={styles.container}>
      <div>CASA CHECHEN</div>
      <div>CASA MANGLAR</div>
      <div>CASA CEIBA</div>
      <div>CASA BOSQUE</div>
      <div>CASA JARDÍN</div>
      <div>CASA PALMERAS</div>
      <div>CASA ARRECIFE</div>
      <div>CASA CEDRO</div>
    </div>
  );
  const torreSelvaCasasJSX = (
    <div className={styles.container}>
      <div>CASA CHACÁ</div>
      <div>CASA AGAVE</div>
      <div>CASA ROBLE</div>
      <div>CASA MAKULIS</div>
    </div>
  );
  const torreJunglaCasasJSX = (
    <div className={styles.container}>
      <div>CASA LU'UM</div>
      <div>CASA CAOBA</div>
      <div>CASA KA'AN</div>
    </div>
  );

  return (
    <div>
      {currentTowerTab === "bosque" ? torreBosqueCasasJSX : null}
      {currentTowerTab === "selva" ? torreSelvaCasasJSX : null}
      {currentTowerTab === "jungla" ? torreJunglaCasasJSX : null}
    </div>
  );
};

export default HouseNames;
