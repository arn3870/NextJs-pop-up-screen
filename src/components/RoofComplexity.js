import React, { useState } from "react";
import styles from "./css/RoofComplexity.module.css";
import style from "./css/GeneralStyling.module.css";

const RoofComplexity = ({ handleNext, handlePrev, handleClose }) => {

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>How Complex is your roof?</div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div
        className={styles.simple}
        onClick={() => handleNext("simple")}
      />
      <div
        className={styles.moderate}
        onClick={() => handleNext("moderate")}
      />
      <div
        className={styles.complex}
        onClick={() => handleNext("complex")}
      />
    </div>
  );
};

export default RoofComplexity;
