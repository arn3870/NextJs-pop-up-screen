import React, { useState } from "react";
import styles from "./css/GarageBool.module.css";
import style from "./css/GeneralStyling.module.css";

const GarageBool = ({ handleNext, handlePrev, handleClose }) => {

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>Do you have a garage?</div>
      <div className={style.modalClass} >
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      </div>
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div
        className={styles.Rectangle17}
        onClick={() => handleNext("Yes")}
      >
        <div className={styles.p}> Yes </div>
      </div>
      <div className={styles.Rectangle20} onClick={() => handleNext("No")}>
        <div className={styles.p}> No </div>
      </div>
    </div>
  );
};

export default GarageBool;
