import React from "react";
import { Link } from "react-router-dom";
import video from "../../image/video.mp4";
import "./Styles/we.css";

const We = () => {
  return (
    <div>
      <div className="contentWe">
        <video loop autoPlay muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        <h3 id="textTitle">Nosotros</h3>
        <p id="text">
          Somos una pasteleria con mas de 50 años de experiencia, dulce sabor
          proviene de recetas familiares trasendentales transmitidas con cariño
          al publico
        </p>
        <Link to="wedetails">
          <button id="seeMore">Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default We;
