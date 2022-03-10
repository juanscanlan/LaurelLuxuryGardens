import logo from "../../Assets/Images/Logo/Logo.png";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.container__logoAnchor} href="#">
        <img
          className={styles.container__logoImage}
          src={logo}
          alt="Laurel Luxury Gardens Logo"
        />
      </a>
      <div className={styles.navigation}>
        <span className={styles.navigation__element}>Inicio</span>
        <span className={styles.navigation__element}>Villas</span>
        <span className={styles.navigation__element}>Tour Virtual</span>
        <span className={styles.navigation__element}>Contacto</span>
        <span className={styles.navigation__element}>🇺🇸</span>
      </div>
    </div>
  );
};

export default Navbar;
