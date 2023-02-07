import React, { useState } from "react";
import styles from "./css/FinalPage.module.css";

const FinalPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>Almost Done! <br/> Where is this project taking place?</div>
      <div className={styles.cancel} />
      <div className={styles.leftArrow} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div>
      <div className={styles.pinIcon}></div>
      <input type="text" className={styles.searchBar}></input></div>
      <label className="p">i also need Gutters</label>
      <input type="checkbox"></input>
    </div>
  );
};

export default FinalPage;