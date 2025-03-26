import styles from "./Create.module.css";
const CardTwo = () => {
    return (
      <div className={styles.cardtwo}>
        <div className={styles.tools}>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.red}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.yellow}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.green}`}></span>
          </div>
        </div>
        <div className={styles.card_content}>
        </div>
      </div>
    );
  };


  export default CardTwo;