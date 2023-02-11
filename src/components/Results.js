import React from "react";
import style from "./css/generalStyling.module.css";
import styles from "./css/Results.module.css";
import BaseCard from "./BaseCard";

const Results = ({ handleNext, handlePrev, handleClose, values }) => {
  return (
    <BaseCard>
      <div className={styles.leftArrow} onClick={handlePrev} />
      <p className={styles.p}>{values[1]}</p>
      <br></br>
      <p className={styles.p}>{values[2]}</p>
      <br></br>
      <p className={styles.p}>{values[3]}</p>
      <br></br>
      <p className={styles.p}>{values[4]}</p>
      <br></br>
      <p className={styles.p}>{values[5]}</p>
      <br></br>
      <p className={styles.p}>{values[6]}</p>
      <br></br>
    </BaseCard>
  );
};

export default Results;
