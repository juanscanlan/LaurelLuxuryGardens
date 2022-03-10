import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from "./header.module.scss";
import HouseNames from "./HouseNames";

const Header = () => {
  const [currentTowerTab, setCurrentTowerTab] = useState("0");

  const onClickHandlerTab = (e) => {
    setCurrentTowerTab(e.target.id);
  };

  return (
    <div>
      <div className={styles.towerContainer}>
        <div
          className={styles.towerBlockContainer}
          id="0"
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
          id="1"
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
          id="2"
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
  );
};

export default Header;
