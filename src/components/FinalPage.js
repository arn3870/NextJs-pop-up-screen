import React, { useState } from "react";
import styles from "./css/FinalPage.module.css";
import style from "./css/generalStyling.module.css";

const FinalPage = ({handleNext, handlePrev, handleClose}) => {
  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>Almost Done! <br/> Where is this project taking place?</div>
      <div className={style.cancel } onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div>
      <div className={styles.pinIcon}></div>
      <input type="text" className={styles.searchBar}></input></div>
      <label>
      <div className={styles.p}>I also need gutters</div>
      <input type="checkbox" className={styles.checkbox}></input>
      </label>
      <button className={styles.button}>View my estimates</button>
    </div>
  );
};

export default FinalPage;