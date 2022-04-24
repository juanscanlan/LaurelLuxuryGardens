import styles from "./header.module.scss";

import Banner from "../../../Assets/Images/Header/Banner3.jpg";

const Header = () => {
  return (
    <div className={styles.headerBanner} id="headerBanner">
      {/* <img className={styles.container__img} src={Banner} /> */}
      <h1 className={styles.headerBanner__title}>Best Villas in Cozumel</h1>
      <a className={styles.headerBanner__subtitle} href="#virtualTour">
        Get Started
      </a>
    </div>
  );
};

export default Header;
