import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/Logo/LogoWhiteStroke.png";

import { useState } from "react";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const mobileBurgerOnClickHandler = () => {
    console.log(burgerActive);
    setBurgerActive((prevState) => !prevState);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burgerIcon");
    const modalEl = document.getElementById("burgerMenu");

    document.addEventListener("click", function (event) {
      let isClickBurger = burgerIcon.contains(event.target);
      let isClickInsideBurger = modalEl.contains(event.target);
      if (!isClickBurger && !isClickInsideBurger) {
        setBurgerActive(false);
      }
    });
  });

  const handleOpenBook = () => {
    let modalEls = document.querySelectorAll(".modal");

    modalEls.forEach((el) => {
      el.classList.remove("hide");
    });
  };

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
        <a className={styles.navigation__element} href="#virtualTour">
          TourVirtual
        </a>
        <a className={styles.navigation__element} href="#villas">
          Casas
        </a>
        <a className={styles.navigation__element} href="#roi">
          Inversionistas
        </a>
        <a className={styles.navigation__element} href="#amenidades">
          Amenidades
        </a>
        <a className={styles.navigation__element} href="#pagos">
          Esquema de pagos
        </a>
        <a className={styles.navigation__element} href="#contacto">
          Contacto
        </a>
        {/* <a className={styles.navigation__element} href="#eng">
          🇺🇸
        </a> */}
      </div>
      <div className={styles.navigationMobileContainer}>
        <div
          className={styles.navigationMobileContainer__book}
          onClick={handleOpenBook}
        >
          Book a call
        </div>
        <div className={styles.navigationMobile}>
          <FontAwesomeIcon
            id="burgerIcon"
            className={styles.navigationMobile__burgerIcon}
            icon={faBars}
            onClick={() => mobileBurgerOnClickHandler()}
          />
          <div
            id="burgerMenu"
            className={`${styles.navigationMobile__burgerMenu} ${
              burgerActive ? null : styles.hide
            }`}
          >
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#virtualTour"
            >
              Virtual Tour
            </a>
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#villas"
            >
              Casas
            </a>
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#roi"
            >
              Inversionistas
            </a>
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#pagos"
            >
              Esquema de pagos
            </a>
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#amenidades"
            >
              Amenidades
            </a>
            <a
              className={styles.navigationMobile__burgerMenu__element}
              href="#contacto"
            >
              Contacto
            </a>
            {/* <a className={styles.navigationMobile__burgerMenu__element}>
            English 🇺🇸
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
