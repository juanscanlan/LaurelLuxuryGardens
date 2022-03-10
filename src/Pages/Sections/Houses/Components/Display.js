import tempImage1 from "../../../../Assets/Images/Houses/Temp/1.jpeg";
import tempImage2 from "../../../../Assets/Images/Houses/Temp/2.jpg";

import HouseData from "./HouseData.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import styles from "./display.module.scss";

const Display = (props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const currentTowerTab = props.currentTowerTab;

  const changeImageHandler = (direction) => {
    setCurrentImage((currentImage) => currentImage + direction);
  };

  const currentHouseImages = HouseData[currentTowerTab][0].images[0];
  console.log(currentHouseImages);

  const currentImageJSX = (
    <img className={styles.imageContainer__image} src={tempImage1} />
  );

  return (
    <div className={styles.container}>
      <div>
        <ul>
          <li>Potato1</li>
          <li>Potato1</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.arrowContainer}>
          <FontAwesomeIcon
            className={styles.arrowContainer__icon}
            icon={faArrowCircleLeft}
            onClick={() => changeImageHandler(-1)}
          />
          <FontAwesomeIcon
            className={styles.arrowContainer__icon}
            icon={faArrowCircleRight}
            onClick={() => changeImageHandler(1)}
          />
        </div>
        {currentImage === 0 ? (
          <img className={styles.imageContainer__image} src={tempImage1} />
        ) : null}
        {currentImage === 1 ? (
          <img className={styles.imageContainer__image} src={tempImage2} />
        ) : null}
      </div>
    </div>
  );
};

export default Display;
