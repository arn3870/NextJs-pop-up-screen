import React, { useState } from "react";
import Modal from "@/components/StoriesModal";
import GarageBool from "@/components/GarageBool";
import CarsInGarage from "@/components/CarsInGarage";
import RoofType from "@/components/RoofType";
import RoofComplexity from "@/components/RoofComplexity";
import RoofMaterialType from "@/components/RoofMeterialType";
import FinalPage from "@/components/FinalPage";
import Results from '@/components/Results'

const StoriesModals = () => {
  const [showModal, setShowModal] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const [values, setValues] = useState({});
  const cards = [
    Modal,
    GarageBool,
    CarsInGarage,
    RoofType,
    RoofComplexity,
    RoofMaterialType,
    FinalPage,
    Results
  ];

  const handleNext = (value) => {
    setValues({ ...values, [cardIndex]: value });
    console.log(values)
    console.log(value)
    setCardIndex(cardIndex + 1);
  };

  const handlePrev = () => {
    setCardIndex(cardIndex - 1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="mainClass">
      {showModal && (
        <div className="modal-container">
          {React.createElement(cards[cardIndex], {
            handleNext,
            handlePrev,
            handleClose,
            values,
          })}
        </div>
      )}
    </div>
  );
};

export default StoriesModals;
