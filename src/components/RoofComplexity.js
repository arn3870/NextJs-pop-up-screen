import React, { useState } from "react";
import styles from "./css/RoofComplexity.module.css";

const RoofComplexity = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How Complex is your roof?</div>
      <div className={styles.cancel} />
      <div className={styles.leftArrow} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.simple}/> 
      <div className={styles.moderate}/> 
      <div className={styles.complex}/> 
    </div>
  );
};

export default RoofComplexity;