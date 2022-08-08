import React from "react";
import { Progress } from "./Progress";

export const Modal = ({closeModal, isOpen}) => {

  return (
    <div className={`modal ${isOpen && 'is-open'} `}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          {" "}
          X{" "}
        </button>
        <Progress />
      </div>
    </div>
  );
};
