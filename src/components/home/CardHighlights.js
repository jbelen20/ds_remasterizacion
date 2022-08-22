import React from "react";
import "../home/Styles/cardHightlights.css";

const CardHighlights = () => {
  const img = "https://via.placeholder.com/150";
  return (
    <div className="contentCardHightlights">
      <img src={img} alt="x" />
      <div className="contentCardHightlightsDetails">
        <p className="nameCard">nombre</p>
        <p className="valueCard">valor</p>
      </div>
    </div>
  );
};

export default CardHighlights;
