import styles from "./modal.module.scss";

import logo from "../../Assets/Images/Logo/LogoWhiteStroke.png";
import signUpImg from "../../Assets/Images/CadaDetalle/Img2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const handleClose = () => {
    let modalEls = document.querySelectorAll(".modal");

    modalEls.forEach((el) => {
      el.classList.add("hide");
    });
  };

  return (
    <div className="modal">
      <div className={styles.container}>
        <FontAwesomeIcon
          className={styles.closeBtn}
          icon={faCircleXmark}
          onClick={handleClose}
        />
        <img className={styles.modalLogo} src={logo} alt="logo" />
        <div className={styles.imgContainer}>
          <img src={signUpImg} alt="Sign Up" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles["textContainer__button"]}>
            <button>FREE CONSULTATION</button>
          </div>
          <div className={styles["textContainer__description"]}>
            Book a free 15-30 min consultation and learn everything you need to
            know about Cozumel's booming real estate.
          </div>
          <div className={styles["textContainer__email"]}>
            Prefer email? <span>Submit your contact details here</span>
          </div>

          {/* <form className={styles.textContainer__right}>
            
              <input type="text" name="name" placeholder="Name*" />
              <input type="email" name="email" placeholder="Email*" />
              <input type="tel" name="phone" placeholder="Phone number*" />
              <input type="submit" value="Submit" />
           
          </form> */}
        </div>
      </div>
      <div className={styles.backgroundOverlay} onClick={handleClose}></div>
    </div>
  );
};

export default Modal;
