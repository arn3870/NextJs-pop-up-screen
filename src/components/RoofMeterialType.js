import React, { useState } from "react";
import styles from "./css/RoofMaterialType.module.css";

const RoofMaterialType = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>What type of roof you are interested in?</div>
      <div className={styles.cancel} />
      <div className={styles.leftArrow} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.asphalt} > <div className={styles.p}> Asphalt </div></div> 
      <div className={styles.clay} > <div className={styles.p}> Clay </div></div> 
      <div className={styles.concrete} > <div className={styles.p}> Concrete </div></div> 
      <div className={styles.copper} > <div className={styles.p}> Copper </div></div> 
      <div className={styles.metal} > <div className={styles.p}> Metal </div></div> 
      <div className={styles.state} > <div className={styles.p}> State </div></div> 
      <div className={styles.wood} > <div className={styles.p}> Wood </div></div> 
    </div>
  );
};

export default RoofMaterialType;