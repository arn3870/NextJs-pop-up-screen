import React, { useState } from "react";
import styles from "./css/RoofType.module.css";

const RoofType = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How steep is most of your roof?</div>
      <div className={styles.cancel} onClick={handleClose} />
      <div className={styles.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.flat} onClick={handleNext} />
      <div className={styles.low} onClick={handleNext} />
      <div className={styles.moderate} onClick={handleNext} />
      <div className={styles.steep} onClick={handleNext} />
    </div>
  );
};

export default RoofType;
