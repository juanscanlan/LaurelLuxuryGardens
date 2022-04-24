import styles from "./header.module.scss";

import Banner from "../../../Assets/Images/Header/Banner3.jpg";

const Header = () => {
  return (
    <div className={styles.headerBanner} id="headerBanner">
      {/* <img className={styles.container__img} src={Banner} /> */}
    </div>
  );
};

export default Header;
