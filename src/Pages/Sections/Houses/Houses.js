import Header from "./Components/Header";
import Display from "./Components/Display";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from "./Components/header.module.scss";
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
    <div>
      <div>
        <div className={styles.towerContainer}>
          {towerTabJSX("bosque", faHouse)}
          {towerTabJSX("selva", faHouse)}
          {towerTabJSX("jungla", faHouse)}
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
