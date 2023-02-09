import React, { useState } from "react";
import styles from "./css/StoriesModal.module.css";
import style from "./css/GeneralStyling.module.css";

const Modal = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>How many stories is your home</div>
      <div className={style.cancel} onClick={handlePrev} />
      <div className={style.leftArrow} onClick={handleClose} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.union} onClick={() => handleNext(3)}>
        <div className={styles.p}>3</div>
      </div>
      <div className={styles.vector} />
      <div className={styles.Rectangle11} onClick={() => handleNext(2)}>
        <div className={styles.p}>2</div>
      </div>
      <div className={styles.Rectangle13} onClick={() => handleNext(1)}>
        <div className={styles.p}>1</div>
      </div>
    </div>
  );
};

export default Modal;
