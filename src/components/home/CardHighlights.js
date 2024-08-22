import React from "react";
import tarta from "../../image/tarta_card.jpg";
import { Link } from "react-router-dom";
import {ContentCardDetails, NameCard, ValueCard} from "../../componentsSC/CardHighlightsSC";

const CardHighlights = () => {
  return (
    <>
      <Link to="/aproduct">
        <img src={tarta} alt="x" />
      </Link>
      <ContentCardDetails>
        <NameCard>nombre</NameCard>
        <ValueCard>valor</ValueCard>
      </ContentCardDetails>
    </>
  );
};


export default CardHighlights;
