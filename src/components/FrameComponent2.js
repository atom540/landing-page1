import Divcard from "./Divcard";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.homeDesktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.tabbedContainerParent}>
            <div className={styles.tabbedContainer}>
              <div className={styles.tabBar}>
                <h1 className={styles.heading3}>Recovery Stories</h1>
              </div>
              <div className={styles.stepperButton}>
                <Divcard />
                <Divcard />
                <Divcard />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.link}>
                <div className={styles.moreRecoveryStories}>
                  More Recovery Stories
                </div>
              </button>
            </div>
          </div>
        </div>
        <h1 className={styles.heading31}>
          Effortless Onboarding: Your Smooth Transition to Excellence
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent2;
