import styles from "./houseNames.module.scss";

import HouseData from "./HouseData";

const HouseNames = (props) => {
  const currentTowerTab = props.currentTowerTab;
  const currentHouse = props.currentHouse;

  const torresJSX = (torre) => (
    <div className={styles.container}>
      {HouseData[torre].map((value, index) => {
        return (
          <div
            key={index}
            id={value.name}
            className={`${styles.container__house} ${
              value.name.toLowerCase() === currentHouse.toLowerCase()
                ? styles["container__house--active"]
                : null
            }`}
            onClick={props.onClickHandlerHouse}
          >
            {value.name}
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      {currentTowerTab === "bosque" ? torresJSX("bosque") : null}
      {currentTowerTab === "selva" ? torresJSX("selva") : null}
      {currentTowerTab === "jungla" ? torresJSX("jungla") : null}
    </div>
  );
};

export default HouseNames;
