"use client";

import React from "react";
import Modal from "@/components/StoriesModal";
import GarageBool from "@/components/GarageBool";
import CarsInGarage from "@/components/CarsInGarage";
import RoofType from "@/components/RoofType";
import RoofComplexity from "@/components/RoofComplexity";
import RoofMaterialType from "@/components/RoofMeterialType";
import FinalPage from "@/components/FinalPage";

const StoriesModals = () => {
  return (
    <div className="mainClass">
      <Modal></Modal>
      <GarageBool></GarageBool>
      <CarsInGarage></CarsInGarage>
      <RoofType></RoofType>
      <RoofComplexity></RoofComplexity>
      <RoofMaterialType></RoofMaterialType>
      <FinalPage></FinalPage>
    </div>
  );
};

export default StoriesModals;
