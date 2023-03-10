import React, { useState } from "react";
import styles from "./css/StoriesModal.module.css";
import style from "./css/generalStyling.module.css";

const Modal = ({ handleNext, handlePrev, handleClose }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.modalClass}>
        <div className={style.cancel} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
        <div className={style.leftArrow} onClick={handleClose} />{" "}
      </div>
      <div className={styles.textClass}>How many stories is your home</div>
      <div className={styles.imageContainer1}>
      <div className={styles.Rectangle13} onClick={() => handleNext("Your house is 1 Story")}/>
      <div className={styles.p}>1</div>
      </div>
      <div className={styles.imageContainer2}>
      <div className={styles.Rectangle11} onClick={() => handleNext("Your house is 2 Stories")}/>
      <div className={styles.p}>2</div>
      </div>
      <div className={styles.imageContainer3}>
      <div className={styles.union} onClick={() => handleNext("Your house is 3 Stories")}/>
      <div className={styles.p}>3</div>
      </div>
    </div>
  );
};

export default Modal;
