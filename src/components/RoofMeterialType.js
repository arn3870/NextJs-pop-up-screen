import React, { useState } from "react";
import styles from "./css/RoofMaterialType.module.css";
import style from "./css/generalStyling.module.css";

const RoofMaterialType = ({ handleNext, handlePrev, handleClose }) => {

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>
        What type of roof you are interested in?
      </div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div
        className={styles.asphalt}
        onClick={() => handleNext("Asphalt")}
      >
        {" "}
        <div className={styles.p}> Asphalt </div>
      </div>
      <div
        className={styles.clay}
        onClick={() => handleNext("Clay")}
      >
        {" "}
        <div className={styles.p}> Clay </div>
      </div>
      <div
        className={styles.concrete}
        onClick={() => handleNext("Concrete")}
      >
        {" "}
        <div className={styles.p}> Concrete </div>
      </div>
      <div
        className={styles.copper}
        onClick={() => handleNext("Copper")}
      >
        {" "}
        <div className={styles.p}> Copper </div>
      </div>
      <div
        className={styles.metal}
        onClick={() => handleNext("Metal")}
      >
        {" "}
        <div className={styles.p}> Metal </div>
      </div>
      <div
        className={styles.state}
        onClick={() => handleNext("State")}
      >
        {" "}
        <div className={styles.p}> State </div>
      </div>
      <div
        className={styles.wood}
        onClick={() => handleNext("Wood")}
      >
        {" "}
        <div className={styles.p}> Wood </div>
      </div>
    </div>
  );
};

export default RoofMaterialType;
