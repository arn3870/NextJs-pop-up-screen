import React, { useState } from "react";
import styles from "./css/CarsInGarage.module.css";
import style from "./css/generalStyling.module.css";

const NumberOfSkylights = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.textClass}>How many skylights are on your roof?</div>
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div className={styles.Rectangle19} onClick={() => handleNext(1)}>
        <div className={styles.p}> 1 </div>
      </div>
      <div className={styles.Rectangle25} onClick={() => handleNext(2)}>
        
        <div className={styles.p}> 2 </div>
      </div>
      <div className={styles.Rectangle26} onClick={() => handleNext(3)}>
        
        <div className={styles.p}> 3 </div>
      </div>
      <div className={styles.Rectangle27} onClick={() => handleNext(4)}>
        
        <div className={styles.p}> 4 </div>
      </div>
    </div>
  );
};

export default NumberOfSkylights;