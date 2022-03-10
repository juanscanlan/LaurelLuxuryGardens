import Header from "./Components/Header";
import Display from "./Components/Display";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from "./Components/header.module.scss";
import HouseNames from "./Components/HouseNames";

const Houses = () => {
  const [currentTowerTab, setCurrentTowerTab] = useState("bosque");

  const onClickHandlerTab = (e) => {
    setCurrentTowerTab(e.target.id);
  };

  return (
    <div>
      <div>
        <div className={styles.towerContainer}>
          <div
            className={styles.towerBlockContainer}
            id="bosque"
            onClick={onClickHandlerTab}
          >
            <FontAwesomeIcon
              className={styles.towerBlockContainer__icon}
              icon={faHouse}
            />
            <h3 className={styles.towerBlockContainer__title}>Torre Bosque</h3>
          </div>
          <div
            className={styles.towerBlockContainer}
            id="selva"
            onClick={onClickHandlerTab}
          >
            <FontAwesomeIcon
              className={styles.towerBlockContainer__icon}
              icon={faHouse}
            />
            <h3 className={styles.towerBlockContainer__title}>Torre Selva</h3>
          </div>
          <div
            className={styles.towerBlockContainer}
            id="jungla"
            onClick={onClickHandlerTab}
          >
            <FontAwesomeIcon
              className={styles.towerBlockContainer__icon}
              icon={faHouse}
            />
            <h3 className={styles.towerBlockContainer__title}>Torre Jungla</h3>
          </div>
        </div>
        <HouseNames currentTowerTab={currentTowerTab} />
      </div>
      <Display currentTowerTab={currentTowerTab} />
    </div>
  );
};

export default Houses;
