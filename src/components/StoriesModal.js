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
      <div className={styles.union}/> 
      <div className={styles.vector}/>
      <div className={styles.Rectangle11}/>
      <div className={styles.Rectangle13}/>
    </div>
  );
};

export default Modal;
