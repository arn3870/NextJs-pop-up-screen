import React from "react";
import style from "./css/GeneralStyling.module.css";
import styles from "./css/Results.module.css";
import BaseCard from "./BaseCard";

const Results = ({ handleNext, handlePrev, handleClose, values }) => {

  return (
    // <div className={style.wrapper}>
    //   <div className={style.modalClass}>
    //     <div className={style.cancel} onClick={handleClose} />
    //     <div><p className={styles.p}>{handleValues(values)}</p></div>
    //   </div>
    // </div>
    <BaseCard>
        <div className={style.leftArrow} onClick={handlePrev} />
        <p className={styles.p}>{values[1]}</p><br></br>
        <p className={styles.p} >{values[2]}</p><br></br>
        <p className={styles.p}>{values[3]}</p><br></br>
        <p className={styles.p}>{values[4]}</p><br></br>
        <p className={styles.p}>{values[5]}</p><br></br>
        <p className={styles.p}>{values[[0], [1]]}</p><br></br>
    </BaseCard>
  );
};
export default Results;
