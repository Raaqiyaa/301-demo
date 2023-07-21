import React from "react";
import "./SelectedBeast.css";

export default function SelectedBeast({ modalContent, closeModal }) {
  return (
    <div className="selected-beast">
      <div className="sb-container">
        <img src={modalContent.image_url} alt={modalContent.title} />
        <h3>{modalContent.title}</h3>
        <p>{modalContent.description}</p>
        <span className="cross" onClick={closeModal}>
          X
        </span>
      </div>
    </div>
  );
}