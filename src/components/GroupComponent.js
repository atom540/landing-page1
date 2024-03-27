import FrameComponent1 from "./FrameComponent1";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.stepperControl}>
        <div className={styles.toggleButtons}>
          <div className={styles.heading3TreatingTheUnderParent}>
            <h1 className={styles.heading3}>
              All Your Needs at Your Fingertips
            </h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Convallis cras placerat
              dignissim aliquam massa. Aliquet volutpat rhoncus in convallis
              consectetur. Cras adipiscing volutpat non hac enim odio enim.
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.heading3TreatingTheUnderWrapper}>
              <div className={styles.heading31}>Consultation at Home</div>
            </div>
            <FrameComponent1
              uiwpay="/uiwpay.svg"
              heading3TreatingTheUnderl="Pay at Home"
            />
          </div>
          <div className={styles.heading3TreatingTheUnderGroup}>
            <div className={styles.heading32}>Nurses at Home</div>
            <FrameComponent1
              uiwpay="/image-41@2x.png"
              heading3TreatingTheUnderl="Healing at Home"
              propPadding="0px 0px var(--padding-mid)"
              propOverflow="unset"
              propMinWidth="unset"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.image37Icon}
        loading="lazy"
        alt=""
        src="/image-37@2x.png"
      />
    </section>
  );
};

export default GroupComponent;
