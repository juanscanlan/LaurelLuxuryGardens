import styles from "./footer.module.scss";

import logo from "../../../Assets/Images/Logo/LogoWhiteStroke.png";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className={styles.wholeContainer}>
      <Contact />
      <div className={styles.container}>
        <img className={styles.container__logo} src={logo}></img>
        <span className={styles.container__span}>
          © Copyright LaurenLuxury Gardens 2022
        </span>
      </div>
    </div>
  );
};

export default Footer;
