import styles from "./InputProcessor.module.css";

const InputProcessor = () => {
  return (
    <section className={styles.inputProcessor}>
      <header className={styles.outputGenerator}>
        <div className={styles.outputGeneratorChild} />
        <h1 className={styles.careAtHome}>Care at home</h1>
        <div className={styles.outputGeneratorInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-1000001134.svg"
          />
        </div>
        <div className={styles.frameDiv}>
          <button className={styles.requestACallBackWrapper}>
            <div className={styles.requestACall}>Request a call back</div>
          </button>
        </div>
      </header>
    </section>
  );
};

export default InputProcessor;
