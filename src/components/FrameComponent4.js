import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.homeDesktopInner}>
      <div className={styles.heading3TreatingTheUnderParent}>
        <h1 className={styles.heading3}>
          Treating the Underlying Causes of Addiction
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.peopleTurnToSubstancesOfAParent}>
              <div className={styles.peopleTurnTo}>
                People turn to substances of abuse for quick highs, to relieve
                stress or to cope with other health conditions. But alcohol and
                other drugs exacerbate symptoms of co-occurring mental health
                disorders. We teach healthy ways to cope with unpleasant
                emotions, and we treat all of the underlying causes of
                addiction.
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.listItemLinkAdhdWrapper}>
                      <div className={styles.listItem}>ADHD</div>
                    </div>
                    <img
                      className={styles.listItem1}
                      loading="lazy"
                      alt=""
                      src="/list--item.svg"
                    />
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.listItemLinkPtsdWrapper}>
                      <div className={styles.listItem2}>PTSD</div>
                    </div>
                    <img
                      className={styles.listItem3}
                      alt=""
                      src="/list--item-1.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.listItemLinkDepressioWrapper}>
                      <div className={styles.listItem4}>Depression</div>
                    </div>
                    <img
                      className={styles.listItem5}
                      alt=""
                      src="/list--item-2.svg"
                    />
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.listItemLinkOcdWrapper}>
                      <div className={styles.listItem6}>OCD</div>
                    </div>
                    <img
                      className={styles.listItem7}
                      alt=""
                      src="/list--item-3.svg"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.link}>
                <div className={styles.moreOnCoOccurring}>
                  More on Co-Occurring Disorders
                </div>
              </button>
            </div>
          </div>
          <div className={styles.blockquote}>
            <h3 className={styles.quote}>“QUOTE”</h3>
            <div className={styles.dataContainer}>
              <div className={styles.footer}>— NAME</div>
            </div>
            <div className={styles.imageCollection}>
              <div className={styles.after} />
            </div>
            <div className={styles.dropdownMenu}>
              <div className={styles.inputFieldSet} />
              <img
                className={styles.progressBarStack}
                loading="lazy"
                alt=""
                src="/rectangle-688@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
