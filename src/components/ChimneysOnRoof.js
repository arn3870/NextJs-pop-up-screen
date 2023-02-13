import React, { useState } from "react";
import styles from "./css/ChimneysOnRoof.module.css";
import style from "./css/generalStyling.module.css";

const ChimneysOnRoof = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>How many chimneys are on the roof?</div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div className={styles.imgwrap1}>
        <div
          className={styles.chimney1}
          onClick={() => handleNext("1 Chimney on your roof")}
        />
        <div className={styles.p}> 1 </div>
      </div>
      <div className={styles.imgwrap2}>
        <div
          className={styles.chimney2}
          onClick={() => handleNext("2 Chimneys on your roof")}
        />
        <div className={styles.p}> 2 </div>
      </div>
      <div className={styles.imgwrap3}>
        <div
          className={styles.chimney3}
          onClick={() => handleNext("3 Chimneys on your roof")}
        />
        <div className={styles.p}> 3 </div>
      </div>
    </div>
  );
};

export default ChimneysOnRoof;
