import styles from "./video.module.scss";

import bannerVideo from "../../../Assets/Videos/LaurelLuxuryVideo.mp4";

const Video = () => {
  return (
    <div className={styles.container} id="virtualTour">
      <h3 className={styles.container__title}>Tour Virtual</h3>
      <span className={styles.container__subtitle}>Explora tu nuevo hogar</span>
      <video
        muted
        loop
        autoPlay
        controls="Play Pause"
        className={styles.container__video}
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
