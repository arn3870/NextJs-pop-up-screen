import React, { useState } from "react";
import styles from "./css/StoriesModal.module.css";

const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How many stories is your home</div>
      <div className={styles.cancel} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.union}> <divc className={styles.p}>3</divc></div> 
      <div className={styles.vector}/>
      <div className={styles.Rectangle11}> <div className={styles.p}> 2 </div> </div>
      <div className={styles.Rectangle13}> <div className={styles.p}> 1 </div> </div>
    </div>
  );
};

export default Modal;
