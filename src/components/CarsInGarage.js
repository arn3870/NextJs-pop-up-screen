import React, { useState } from "react";
import styles from "./css/CarsInGarage.module.css"
const CarsInGarage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How many cars fit in your garage?</div>
      <div className={styles.cancel} />
      <div className={styles.leftArrow} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.union}/> 
      <div className={styles.vector}/>
      <div className={styles.Rectangle19}> <div className={styles.p}> 1 </div> </div>
      <div className={styles.Rectangle25}> <div className={styles.p}> 2 </div> </div>
      <div className={styles.Rectangle26}> <div className={styles.p}> 3 </div> </div>
      <div className={styles.Rectangle27}> <div className={styles.p}> 4 </div> </div>
    </div>
  );
};

export default CarsInGarage;