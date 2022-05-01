import styles from "./header.module.scss";

import Banner from "../../../Assets/Images/Header/Banner3.jpg";
import bannerVideo from "../../../Assets/Videos/LaurelLuxuryVideo.mp4";

const Header = () => {
  return (
    <div className={styles.headerBanner} id="headerBanner">
      {/* <img className={styles.container__img} src={Banner} /> */}
      {/* <h1 className={styles.headerBanner__title}>Best Villas in Cozumel</h1>
      <a className={styles.headerBanner__subtitle} href="#virtualTour">
        Conoce tu nuevo hogar
      </a> */}
      {/* <video
        muted
        loop
        controls="Play Pause"
        className={styles.container__video}
      >
        <source src={bannerVideo} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Header;
