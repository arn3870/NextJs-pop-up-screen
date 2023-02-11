import React from "react";
import styles from "./css/Results.module.css";
import BaseCard from "./BaseCard";

const Results = ({ handlePrev, values }) => {
  return (
    <BaseCard>
      <div className={styles.leftArrow} onClick={handlePrev} />
      <p className={styles.p}>{values[1]}</p>
      <br />
      <p className={styles.p}>{values[2]}</p>
      <br />
      <p className={styles.p}>{values[3]}</p>
      <br />
      <p className={styles.p}>{values[4]}</p>
      <br />
      <p className={styles.p}>{values[5]}</p>
      <br />
      <p className={styles.p}>{values[6][0]}</p>
      <br />
      <p className={styles.p}>{values[6][1].toString()}</p>
      <br />
    </BaseCard>
  );
};

export default Results;
