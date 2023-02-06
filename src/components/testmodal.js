import React, { useState } from "react";
import styles from "./css/testModal.module.css";
// import "./modal.css";

// const Modal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showButton, setShowButton] = useState(true);
//   const [step, setStep] = useState(1);
//   const [stories, setStories] = useState(0);
//   const [garage, setGarage] = useState(false);
//   const [cars, setCars] = useState(0);

// //   const handleHideButton = () => {
// //     setHideButton(false)
// //     setStep(1)
// //   }
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setStep(1);
//   };

//   const handleStep1 = (stories) => {
//     setStories(stories);
//     setStep(2);
//   };

//   const handleStep2 = (garage) => {
//     setGarage(garage);
//     setStep(3);
//   };

//   const handleStep3 = (cars) => {
//     setCars(cars);
//   };

//   return (
//     <div >
//       { showButton && <button onClick={() => setShowModal(true) && setShowButton(false)}>Open Modal</button>}
//       {showModal && (
//         <div className={styles.wrapper}>
//           <div className={styles.modalClass}>
//             <div >
//               {step !== 1 && (
//                 <div className={styles.leftArrow} onClick={() => setStep(step - 1)}>
//                   <i className="cross" />
//                 </div>
//               )}
//               <button onClick={handleCloseModal}>
//                 <i className="fa fa-times" />
//               </button>
//             </div>
//             <div className="modal-body">
//               {step === 1 && (
//                 <>
//                   <h3>How many stories are in your home?</h3>
//                   <button onClick={() => handleStep1(1)}>1</button>
//                   <button onClick={() => handleStep1(2)}>2</button>
//                   <button onClick={() => handleStep1(3)}>3</button>
//                 </>
//               )}
//               {step === 2 && (
//                 <>
//                   <h3>Do you have a garage?</h3>
//                   <button onClick={() => handleStep2(true)}>Yes</button>
//                   <button onClick={() => handleStep2(false)}>No</button>
//                 </>
//               )}
//               {step === 3 && (
//                 <>
//                   <h3>How many cars fit in your garage?</h3>
//                   <button onClick={() => handleStep3(1)}>1</button>
//                   <button onClick={() => handleStep3(2)}>2</button>
//                   <button onClick={() => handleStep3(3)}>3</button>
//                   <button onClick={() => handleStep3(4)}>4</button>
//                 </>
//               )}
//             </div>
//             <div className="modal-footer">
//               <h3>
//                 Stories: {stories}, Garage: {garage ? "Yes" : "No"}, Cars:{cars}
//               </h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textClass}>How many stories is your home</div>
      <div className={styles.cancel} />
      <div className={styles.Rectangle6} />
      <div className={styles.Rectangle7} />
      <div className={styles.modalClass}>
      </div>
    </div>
  );
};

export default Modal;
