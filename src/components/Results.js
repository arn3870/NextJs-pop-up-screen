import React from "react";
import style from "./css/GeneralStyling.module.css";
import styles from "./css/StoriesModal.module.css";

const Results = ({ handleNext, handlePrev, handleClose, values }) => {

    const handleValues = (values) => {
        for (let i = 0; i <= values.length; i++){
            return values[i]
        }
    }

  return (
    <div className={style.wrapper}>
      <div className={style.modalClass}>
        <div className={style.cancel} onClick={handleClose} />
        <div className={style.leftArrow} onClick={handlePrev} />
        <div><p className={styles.p}>{handleValues(values)}</p></div>
      </div>
    </div>
  );
};
export default Results;
