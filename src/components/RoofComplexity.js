import React, { useState } from "react";
import styles from "./css/RoofComplexity.module.css";
import style from "./css/generalStyling.module.css";

const RoofComplexity = ({ handleNext, handlePrev, handleClose }) => {

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>How Complex is your roof?</div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div className={styles.imgwrap1}>
      <div
        className={styles.simple}
        onClick={() => handleNext("simple")}
      />
      </div>
      <div className={styles.imgwrap2}>
      <div
        className={styles.moderate}
        onClick={() => handleNext("moderate")}
      />
      </div>
      <div className={styles.imgwrap3}>
      <div
        className={styles.complex}
        onClick={() => handleNext("complex")}
      />
      </div>
    </div>
  );
};

export default RoofComplexity;
