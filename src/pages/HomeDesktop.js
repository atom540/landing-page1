import InputProcessor from "../components/InputProcessor";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import ScrollbarTrack from "../components/ScrollbarTrack";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Divfooter from "../components/Divfooter";
import styles from "./HomeDesktop.module.css";

const HomeDesktop = () => {
  return (
    <div className={styles.homeDesktop}>
      <img className={styles.homeDesktopChild} alt="" src="/group-834.svg" />
      <InputProcessor />
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <ScrollbarTrack />
      <GroupComponent />
      <img
        className={styles.logicBranchIcon}
        loading="lazy"
        alt=""
        src="/vector-59.svg"
      />
      <img
        className={styles.logicBranchIcon1}
        loading="lazy"
        alt=""
        src="/vector-60.svg"
      />
      <div className={styles.frequentlyAskQuestionWrapper}>
        <h1 className={styles.frequentlyAskQuestion}>
          Frequently Ask Question
        </h1>
      </div>
      <FrameComponent />
      <Divfooter />
    </div>
  );
};

export default HomeDesktop;
