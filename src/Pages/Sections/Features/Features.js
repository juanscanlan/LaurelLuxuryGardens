import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FeaturesList from "./FeaturesList";

import styles from "./features.module.scss";

const Features = () => {
  const featuresContent = FeaturesList.map((feature) => {
    return (
      <div className={styles.container} key={feature.Key}>
        <div className={styles.featureContainer}>
          <FontAwesomeIcon
            className={styles.featureContainer__icon}
            icon={feature.Icon}
          />
          <span className={styles.featureContainer__text}>{feature.Name}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.wholeContainer} id="amenidades">
      <h2 className={styles.title}>AMENIDADES Y SERVICIOS</h2>
      <div className={styles.container}>{featuresContent}</div>
    </div>
  );
};

export default Features;
