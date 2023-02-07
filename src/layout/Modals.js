"use client";

import React, { useState } from "react";
import Modal from "@/components/StoriesModal";
import GarageBool from "@/components/GarageBool";
import CarsInGarage from "@/components/CarsInGarage";
import RoofType from "@/components/RoofType";
import RoofComplexity from "@/components/RoofComplexity";
import RoofMaterialType from "@/components/RoofMeterialType";
import FinalPage from "@/components/FinalPage";

const StoriesModals = () => {
const [showModal, setShowModal] = useState(true);
const [cardIndex, setCardIndex] = useState(0);
const cards = [Modal, GarageBool, CarsInGarage, RoofType, RoofComplexity, RoofMaterialType, FinalPage];

const handleNext = () => {
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
handleClose
})}
</div>
)}
</div>
);
};

export default StoriesModals