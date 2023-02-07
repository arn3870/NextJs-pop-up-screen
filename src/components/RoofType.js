import React, { useState } from "react";
import styles from "./css/RoofType.module.css";

const RoofType = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How steep is most of your roof?</div>
      <div className={styles.cancel} />
      <div className={styles.leftArrow} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.flat}/> 
      <div className={styles.low}/> 
      <div className={styles.moderate}/> 
      <div className={styles.steep}/> 
    </div>
  );
};

export default RoofType;