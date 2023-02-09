import React, { useState } from "react";
import styles from "./css/FinalPage.module.css";
import style from "./css/GeneralStyling.module.css";

const FinalPage = ({ handleNext, handlePrev, handleClose }) => {
  const [location, setLocation] = useState("");
  const [gutters, setGutters] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGuttersChange = (e) => {
    setGutters(e.target.checked);
  };

  const handleViewEstimates = () => {
    setShowResult(true);
    handleNext({location, gutters})
  };

  return (
    <div className={style.wrapper}>
      <div className={styles.textClass}>
        Almost Done! <br /> Where is this project taking place?
      </div>
      <div className={style.cancel} onClick={handleClose} />
      <div className={style.leftArrow} onClick={handlePrev} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={style.modalClass} />
      <div>
        <div className={styles.pinIcon}></div>
        <input
          type="text"
          className={styles.searchBar}
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <label>
        <div className={styles.p}>I also need gutters</div>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={gutters}
          onChange={handleGuttersChange}
        />
      </label>
      <button className={styles.button} onClick={handleViewEstimates}>
        View my estimates
      </button>
    </div>
  );
};

export default FinalPage;
