import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <section className={styles.homeDesktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.highlightUnderline3Parent}>
              <div className={styles.highlightUnderline3} />
              <h1 className={styles.weProvideInformation}>
                We provide information, resources, and treatment for people
                battling addiction and related conditions.
              </h1>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.needAddictionHelpParent}>
                <h1 className={styles.needAddictionHelp}>
                  Need addiction help?
                </h1>
                <div className={styles.callTheAdvanced}>
                  Call the Advanced Recovery Systems 24/7 confidential
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.div}>6745763733</div>
                </div>
                <button className={styles.iconlylightOutlinecallParent}>
                  <img
                    className={styles.iconlylightOutlinecall}
                    alt=""
                    src="/iconlylightoutlinecall@2x.png"
                  />
                  <div className={styles.callNow}>Call Now</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
