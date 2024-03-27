import { useCallback } from "react";
import styles from "./Divfooter.module.css";

const Divfooter = () => {
  const onListItemLinkClick = useCallback(() => {
    window.open("https://www.facebook.com/drugrehabcom/");
  }, []);

  const onListItemLink1Click = useCallback(() => {
    window.open("https://twitter.com/DrugRehab_com");
  }, []);

  const onListItemLink2Click = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCz21noAaueK5ZAfzaT1rbcw");
  }, []);

  return (
    <section className={styles.divfooter}>
      <div className={styles.listItemContainer}>
        <p className={styles.home}>Home</p>
        <p className={styles.understandingAddiction}>Understanding Addiction</p>
        <p className={styles.substanceAbuseTreatment}>
          Substance Abuse Treatment
        </p>
        <p className={styles.aboutUs}>About Us</p>
        <p className={styles.aboutAdvancedRecovery}>
          About Advanced Recovery Systems
        </p>
        <p className={styles.ourTreatmentCenters}>Our Treatment Centers</p>
      </div>
      <div className={styles.conditionChecker}>
        <div className={styles.listItemContainer1}>
          <p className={styles.termsAndConditions}>Terms and Conditions</p>
          <p className={styles.noticeOfPrivacy}>Notice of Privacy Practices</p>
          <p className={styles.privacyPolicy}>Privacy Policy</p>
          <p className={styles.contactUs}>Contact Us</p>
          <p className={styles.whereDoesMy}>Where Does My Call Go?</p>
        </div>
      </div>
      <div className={styles.valueComparator}>
        <div className={styles.branchSplitter}>
          <div className={styles.branchSplitterInner}>
            <div className={styles.listItemLinkParent}>
              <img
                className={styles.listItemLink}
                loading="lazy"
                alt=""
                src="/list--item--link.svg"
                onClick={onListItemLinkClick}
              />
              <img
                className={styles.listItemLink1}
                alt=""
                src="/list--item--link-1.svg"
                onClick={onListItemLink1Click}
              />
              <img
                className={styles.listItemLink2}
                alt=""
                src="/list--item--link-2.svg"
                onClick={onListItemLink2Click}
              />
            </div>
          </div>
          <div className={styles.errorHandler}>
            <div className={styles.sequentialProcessor}>
              <img
                className={styles.sequentialProcessorChild}
                loading="lazy"
                alt=""
                src="/group-1000001134.svg"
              />
            </div>
            <h1 className={styles.careAtHome}>Care at home</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divfooter;
