import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.listBoxSetWrapper}>
      <div className={styles.listBoxSet}>
        <div className={styles.checkboxSet}>
          <div className={styles.frameParent}>
            <div className={styles.heading2FindYourPathToParent}>
              <h1 className={styles.heading2}>Find Your Path to Recovery</h1>
              <div className={styles.rehabForAlcoholContainer}>
                <span>
                  <p className={styles.rehabForAlcohol}>
                    Rehab for alcohol requires a personal approach. It should be
                    tailored to your needs.
                  </p>
                  <p className={styles.weWorkWith}>
                    We work with you to create a personalized treatment plan
                    that includes individual therapy,
                  </p>
                  <p className={styles.counsellingGroupTherapy}>
                    counselling, group therapy and medication-assisted treatment
                    options.
                  </p>
                </span>
              </div>
            </div>
            <button className={styles.link}>
              <div className={styles.learnMoreAbout}>
                Learn More About Treatment
              </div>
            </button>
          </div>
        </div>
        <img
          className={styles.image13Icon}
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
