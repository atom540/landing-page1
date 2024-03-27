import styles from "./ScrollbarTrack.module.css";

const ScrollbarTrack = () => {
  return (
    <section className={styles.scrollbarTrack}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.tableCell}>
            <div className={styles.tableRow}>
              <div className={styles.tableFooter}>
                <div className={styles.spacer} />
                <div className={styles.divider}>1</div>
              </div>
            </div>
            <div className={styles.searchWrapper}>
              <h3 className={styles.search}>Search</h3>
            </div>
            <div className={styles.findYourBest}>Find your best Care</div>
          </div>
          <div className={styles.tableCell1}>
            <div className={styles.tableCellInner}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.div}>2</div>
              </div>
            </div>
            <div className={styles.bookWrapper}>
              <h3 className={styles.book}>Book</h3>
            </div>
            <div className={styles.bookACall}>Book a call with us</div>
          </div>
          <div className={styles.calloutParent}>
            <img
              className={styles.calloutIcon}
              loading="lazy"
              alt=""
              src="/vector-61.svg"
            />
            <div className={styles.quoteMark}>
              <div className={styles.thumbnailBox}>
                <div className={styles.infoBubble}>
                  <div className={styles.labeledValue} />
                  <div className={styles.actionButton}>3</div>
                </div>
              </div>
              <h3 className={styles.setYourFirst}>Set your first meeting</h3>
              <div className={styles.getGdaAtHomeWrapper}>
                <div className={styles.getGdaAt}>Get GDA at Home</div>
              </div>
            </div>
          </div>
          <div className={styles.imageStack}>
            <div className={styles.circlePacking}>
              <div className={styles.tableLayout} />
              <div className={styles.div1}>4</div>
            </div>
            <div className={styles.dropdownMenu}>
              <h3 className={styles.getHeal}>Get Heal</h3>
            </div>
            <div className={styles.dropdownMenu1}>
              <div className={styles.getHeal1}>Get Heal</div>
            </div>
          </div>
        </div>
        <div className={styles.checkboxListWrapper}>
          <button className={styles.checkboxList}>
            <div className={styles.startBooking}>Start Booking</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollbarTrack;
