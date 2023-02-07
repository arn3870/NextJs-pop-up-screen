import React, { useState } from "react";
import styles from "./css/RoofMaterialType.module.css";

const RoofMaterialType = ({handleNext, handlePrev, handleClose}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>What type of roof you are interested in?</div>
      <div className={styles.cancel} onClick={handleClose}/>
      <div className={styles.leftArrow} onClick={handlePrev}/>
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass} />
      <div className={styles.asphalt} onClick={handleNext}> <div className={styles.p}> Asphalt </div></div> 
      <div className={styles.clay} onClick={handleNext}> <div className={styles.p}> Clay </div></div> 
      <div className={styles.concrete} onClick={handleNext}> <div className={styles.p}> Concrete </div></div> 
      <div className={styles.copper} onClick={handleNext}> <div className={styles.p}> Copper </div></div> 
      <div className={styles.metal} onClick={handleNext}> <div className={styles.p}> Metal </div></div> 
      <div className={styles.state} onClick={handleNext}> <div className={styles.p}> State </div></div> 
      <div className={styles.wood} onClick={handleNext}> <div className={styles.p}> Wood </div></div> 
    </div>
  );
};

export default RoofMaterialType;