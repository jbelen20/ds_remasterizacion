import React from "react";
import "../home/Styles/cardHightlights.css";
import tarta from "../../image/tarta_card.jpg";

const CardHighlights = () => {
  const img = "https://via.placeholder.com/150";
  return (
    <div className="contentCardHightlights">
      <img src={tarta} alt="x" />
      <div className="contentCardHightlightsDetails">
        <p className="nameCard">nombre</p>
        <p className="valueCard">valor</p>
      </div>
    </div>
  );
};

export default CardHighlights;
