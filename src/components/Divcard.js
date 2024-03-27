import styles from "./Divcard.module.css";

const Divcard = () => {
  return (
    <div className={styles.divcard}>
      <img
        className={styles.imagejpgIcon}
        loading="lazy"
        alt=""
        src="/imagejpg@2x.png"
      />
      <div className={styles.modalHeader}>
        <div className={styles.heading3}>Title</div>
      </div>
    </div>
  );
};

export default Divcard;
