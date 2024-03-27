import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  uiwpay,
  heading3TreatingTheUnderl,
  propPadding,
  propOverflow,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const uiwpayIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const heading3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.uiwpayWrapper} style={frameDivStyle}>
        <img
          className={styles.uiwpayIcon}
          loading="lazy"
          alt=""
          src={uiwpay}
          style={uiwpayIconStyle}
        />
      </div>
      <div className={styles.heading3} style={heading3Style}>
        {heading3TreatingTheUnderl}
      </div>
    </div>
  );
};

export default FrameComponent1;
