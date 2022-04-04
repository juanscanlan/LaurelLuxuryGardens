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
  const currentHouse = props.currentHouse;
  const currentHouseFeatures = HouseData[currentTowerTab]
    .filter((house) => {
      return house.name.toLowerCase() === currentHouse.toLowerCase();
    })
    .map((house) => house.features)[0];

  const currentHouseImages = HouseData[currentTowerTab]
    .filter((house) => {
      return house.name.toLowerCase() === currentHouse.toLowerCase();
    })
    .map((house) => house.images)[0];

  const houseFeaturesJSX = (
    <ul className={styles.featuresContainer}>
      {currentHouseFeatures.map((feature, index) => {
        return (
          <li key={index} className={styles.featuresContainer__feature}>
            {feature}
          </li>
        );
      })}
    </ul>
  );

  const changeImageHandler = (direction) => {
    let _nextImage = currentImage + direction;
    let _numberImages = Object.keys(currentHouseImages).length;

    if (_nextImage > _numberImages - 1) {
      setCurrentImage(0);
    } else if (_nextImage < 0) {
      setCurrentImage(_numberImages - 1);
    } else {
      setCurrentImage(_nextImage);
    }
  };

  const currentImageJSX = (
    <img className={styles.imageContainer__image} src={tempImage1} />
  );

  return (
    <div className={styles.container}>
      {/* <div>{houseFeaturesJSX}</div> */}
      <div className={styles.imageContainer}>
        <div className={styles.arrowContainer}>
          {Object.keys(currentHouseImages).length > 1 ? (
            <>
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
            </>
          ) : null}
        </div>

        <img
          className={styles.imageContainer__image}
          src={currentHouseImages[currentImage]}
        />
        {/* {currentImage === 1 ? (
          <img className={styles.imageContainer__image} src={tempImage2} />
        ) : null} */}
      </div>
    </div>
  );
};

export default Display;
