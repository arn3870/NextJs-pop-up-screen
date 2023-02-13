import React, { useState } from "react";
import styles from "./css/RoofTearing.module.css";
import style from "./css/generalStyling.module.css";

const RoofTearing = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.textClass}>Do you want to tear off your old roof?</div>
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div className={styles.Rectangle25} onClick={() => handleNext("Roof Tearing: Yes - 1 Layer")}>
        <div className={styles.p}> Yes - 1 Layer </div>
      </div>
      <div className={styles.Rectangle26} onClick={() => handleNext("Roof Tearing: Yes - 2 Layer")}>
        
        <div className={styles.p}> Yes - 2 Layer </div>
      </div>
      <div className={styles.Rectangle27} onClick={() => handleNext("Roof Tearing: No")}>
        
        <div className={styles.p}> No </div>
      </div>
    </div>
  );
};

export default RoofTearing;