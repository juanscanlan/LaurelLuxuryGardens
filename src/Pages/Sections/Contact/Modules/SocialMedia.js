import styles from "./socialMedia.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookMessenger,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <a href="https://wa.me/529871381435" target="_blank">
        <FontAwesomeIcon
          className={styles.container__whatsapp}
          icon={faWhatsapp}
        />
      </a>
      <a href="http://m.me/laurel.luxury.gardens" target="_blank">
        <FontAwesomeIcon
          className={styles.container__messenger}
          icon={faFacebookMessenger}
        />
      </a>

      <a
        className={styles.container__form}
        href="https://forms.gle/9e8gKofC1UmipA677"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className={styles.formIcon} icon={faGoogleDrive} />
        Form
      </a>
    </div>
  );
};

export default SocialMedia;
