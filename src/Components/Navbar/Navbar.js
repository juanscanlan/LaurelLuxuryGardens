import logo from "../../Assets/Images/Logo/LogoWhiteStroke.png";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container} id="home">
      <a className={styles.container__logoAnchor} href="#">
        <img
          className={styles.container__logoImage}
          src={logo}
          alt="Laurel Luxury Gardens Logo"
        />
      </a>
      <div className={styles.navigation}>
        <a className={styles.navigation__element} href="#villas">
          Villas
        </a>
        <a className={styles.navigation__element} href="#virtualTour">
          TourVirtual
        </a>
        <a className={styles.navigation__element} href="#contact">
          Contacto
        </a>
        <a className={styles.navigation__element} href="#villas">
          🇺🇸
        </a>
      </div>
    </div>
  );
};

export default Navbar;
