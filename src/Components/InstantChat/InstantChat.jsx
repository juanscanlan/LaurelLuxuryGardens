import styles from "./instantChat.module.scss";

import messenger from "../../Assets/Images/InstantChat/MessengerIcon.png";
import whatsapp from "../../Assets/Images/InstantChat/WhatsAppIcon.png";

const InstantChat = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://m.me/laurel.luxury.gardens"
        target="_blank"
        rel="noreferrer"
      >
        <img src={messenger} alt="Messenger Chat" />
      </a>
      <a
        href="https://wa.me/5219871381435?text=Hello%2C%20I%20am%20interested%20in%20the%20luxury%20villas"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="Whatsapp Chat" />
      </a>
    </div>
  );
};

export default InstantChat;
