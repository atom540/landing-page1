import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.questionParent}>
          <div className={styles.question}>
            <ul className={styles.question1}>
              <li>Question</li>
            </ul>
          </div>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-205.svg"
          />
        </div>
        <div className={styles.loremIpsumDolorSitAmetConWrapper}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Convallis cras placerat
            dignissim aliquam massa. Aliquet volutpat rhoncus in convallis
            consectetur. Cras adipiscing volutpat non hac enim odio enim.
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.alerttimesOutlineParent}>
          <img
            className={styles.alerttimesOutlineIcon}
            loading="lazy"
            alt=""
            src="/alerttimes-outline@2x.png"
          />
          <img
            className={styles.alerttimesOutlineIcon1}
            alt=""
            src="/alerttimes-outline@2x.png"
          />
          <div className={styles.questionGroup}>
            <div className={styles.question2}>
              <ul className={styles.question3}>
                <li>Question</li>
              </ul>
            </div>
            <div className={styles.frameInner} />
            <div className={styles.questionContainer}>
              <div className={styles.question4}>
                <ul className={styles.question5}>
                  <li>Question</li>
                </ul>
              </div>
              <img className={styles.lineIcon} alt="" />
            </div>
            <div className={styles.dataCollector}>
              <div className={styles.question6}>
                <ul className={styles.question7}>
                  <li>Question</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className={styles.alerttimesOutlineIcon2}
            alt=""
            src="/alerttimes-outline@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
