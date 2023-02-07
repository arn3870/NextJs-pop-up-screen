import React, { useState } from "react";
import styles from "./css/RoofType.module.css";
import style from "./css/generalStyling.module.css";

const RoofType = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>How steep is most of your roof?</div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div className={styles.flat} onClick={handleNext} />
      <div className={styles.low} onClick={handleNext} />
      <div className={styles.moderate} onClick={handleNext} />
      <div className={styles.steep} onClick={handleNext} />
    </div>
  );
};

export default RoofType;
