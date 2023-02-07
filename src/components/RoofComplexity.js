import React, { useState } from "react";
import styles from "./css/RoofComplexity.module.css";

const RoofComplexity = ({handleNext, handlePrev, handleClose}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How Complex is your roof?</div>
      <div className={styles.cancel} onClick={handleClose} />
      <div className={styles.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.simple} onClick={handleNext}/> 
      <div className={styles.moderate} onClick={handleNext}/> 
      <div className={styles.complex} onClick={handleNext}/> 
    </div>
  );
};

export default RoofComplexity;