import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <section className={styles.homeDesktopInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.healingStartsAtHomeWrapper}>
            <h1 className={styles.healingStartsAt}>Healing Starts At Home</h1>
          </div>
          <div className={styles.weUseOnlyTheBestQualityMWrapper}>
            <div className={styles.weUseOnly}>
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <button className={styles.bookAnAppointmentWrapper}>
                <div className={styles.bookAnAppointment}>
                  Book an appointment
                </div>
              </button>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.iconlyboldcalling}
                    alt=""
                    src="/iconlyboldcalling@2x.png"
                  />
                </button>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.hCareParent}>
                  <div className={styles.hCare}>24H Care</div>
                  <div className={styles.div}>0900-78601</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.aboutCareAtHomeWrapper}>
                  <h3 className={styles.aboutCareAt}>About Care At Home</h3>
                </div>
                <div className={styles.divcol}>
                  <div className={styles.careAtHomeContainer}>
                    <p className={styles.careAtHome}>
                      Care at Home is a trusted partner in promoting well-being,
                      ensuring that quality
                    </p>
                    <p className={styles.healthcareIsAlways}>
                      healthcare is always within reach. Our care doesn’t end at
                      the hospital exit. We continue
                    </p>
                    <p className={styles.toGiveYou}>
                      to give you the best care.....
                    </p>
                  </div>
                  <div className={styles.readMoreParent}>
                    <div className={styles.readMore}>Read More</div>
                    <img
                      className={styles.iconlylightOutlinearrowR}
                      alt=""
                      src="/iconlylightoutlinearrow--right-circle@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.image15Icon}
          loading="lazy"
          alt=""
          src="/image-15@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent7;
