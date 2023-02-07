import React, { useState } from "react";
import styles from "./css/FinalPage.module.css";

const FinalPage = (handleNext, handlePrev, handleClose) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>Almost Done! <br/> Where is this project taking place?</div>
      <div className={styles.cancel } onclick={handleClose} />
      <div className={styles.leftArrow} onclick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
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