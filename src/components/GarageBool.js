import React, { useState } from "react";
import styles from "./css/GarageBool.module.css";

const GarageBool = ({handleNext, handlePrev, handleClose}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>Do you have a garage?</div>
      <div className={styles.cancel} onClick={handleClose} />
      <div className={styles.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.union}/> 
      <div className={styles.vector}/>
      <div className={styles.Rectangle17} onClick={handleNext} > <div className={styles.p}> Yes </div> </div>
      <div className={styles.Rectangle20} onClick={handleNext}> <div className={styles.p}> No </div> </div>
    </div>
  );
};

export default GarageBool;