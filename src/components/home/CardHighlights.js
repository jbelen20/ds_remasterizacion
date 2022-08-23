import React from "react";
import "../home/Styles/cardHightlights.css";
import tarta from "../../image/tarta_card.jpg";
import { Link } from "react-router-dom";

const CardHighlights = () => {
  const img = "https://via.placeholder.com/150";
  return (
    <div className="contentCardHightlights">
      <Link to="/aproduct">
        <img src={tarta} alt="x" />
      </Link>
      <div className="contentCardHightlightsDetails">
        <p className="nameCard">nombre</p>
        <p className="valueCard">valor</p>
      </div>
    </div>
  );
};

export default CardHighlights;
