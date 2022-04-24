import styles from "./houses.module.scss";

import Header from "./Components/Header";
import Display from "./Components/Display";

import { faTree, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// import styles from "./Components/header.module.scss";
import HouseNames from "./Components/HouseNames";
import HouseData from "./Components/HouseData";

const Houses = () => {
  const [currentTowerTab, setCurrentTowerTab] = useState("bosque");
  const [currentHouse, setcurrentHouse] = useState("chechen");

  const onClickHandlerTab = (e) => {
    setCurrentTowerTab(e.target.id);
    setcurrentHouse(HouseData[e.target.id][0].name);
  };

  const onClickHandlerHouse = (e) => {
    setcurrentHouse(e.target.id);
  };

  const towerTabJSX = (id, icon) => {
    return (
      <div
        className={`${styles.towerBlockContainer} ${
          currentTowerTab === id ? styles["towerBlockContainer--active"] : null
        }`}
        id={id}
        onClick={onClickHandlerTab}
      >
        <FontAwesomeIcon
          className={styles.towerBlockContainer__icon}
          icon={icon}
        />
        <h3 className={styles.towerBlockContainer__title}>Torre {id}</h3>
      </div>
    );
  };

  return (
    <div id="villas" className={styles.container}>
      <h3 className={styles.title}>Conoce nuestras Villas</h3>
      <div>
        <div className={styles.towerContainer}>
          {towerTabJSX("bosque", faTree)}
          {towerTabJSX("selva", faSeedling)}
          {towerTabJSX("jungla", faPagelines)}
        </div>
        <HouseNames
          currentTowerTab={currentTowerTab}
          currentHouse={currentHouse}
          onClickHandlerHouse={onClickHandlerHouse}
        />
      </div>
      <Display currentTowerTab={currentTowerTab} currentHouse={currentHouse} />
    </div>
  );
};

export default Houses;
