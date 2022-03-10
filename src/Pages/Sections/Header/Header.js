import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>
        Casas y departamentos en Cozumel
      </h1>
      <div>Potato</div>
    </div>
  );
};

export default Header;
