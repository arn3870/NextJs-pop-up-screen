import React, { useState } from "react";
import styles from "./css/RoofMaterialType.module.css";
import style from "./css/generalStyling.module.css";

const RoofMaterialType = ({ handleNext, handlePrev, handleClose }) => {

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>
        What of roof you are interested in?
      </div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div
        className={styles.asphalt}
        onClick={() => handleNext("You're in interested in Asphalt roof")}
      >
        {" "}
        <div className={styles.p}> Asphalt </div>
      </div>
      <div
        className={styles.clay}
        onClick={() => handleNext("You're in interested in Clay roof")}
      >
        {" "}
        <div className={styles.p}> Clay </div>
      </div>
      <div
        className={styles.concrete}
        onClick={() => handleNext("You're in interested in Concrete roof")}
      >
        {" "}
        <div className={styles.p}> Concrete </div>
      </div>
      <div
        className={styles.copper}
        onClick={() => handleNext("You're in interested in Copper roof")}
      >
        {" "}
        <div className={styles.p}> Copper </div>
      </div>
      <div
        className={styles.metal}
        onClick={() => handleNext("You're in interested in Metal roof type")}
      >
        {" "}
        <div className={styles.p}> Metal </div>
      </div>
      <div
        className={styles.state}
        onClick={() => handleNext("You're in interested in State roof type")}
      >
        {" "}
        <div className={styles.p}> State </div>
      </div>
      <div
        className={styles.wood}
        onClick={() => handleNext("You're in interested in Wood roof")}
      >
        {" "}
        <div className={styles.p}> Wood </div>
      </div>
    </div>
  );
};

export default RoofMaterialType;
