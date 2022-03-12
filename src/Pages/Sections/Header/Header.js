import styles from "./header.module.scss";

import Banner from "../../../Assets/Images/Header/Banner";

const Header = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.container__title}>
        Casas y departamentos en Cozumel
      </h1>
      <div>Potato</div> */}
      <img className={styles.container__img} src={Banner} />
    </div>
  );
};

export default Header;
