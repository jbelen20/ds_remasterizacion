import React from "react";
import "../home/Styles/footer.css";

const Footer = () => {
  return (
    <div className="contentFooter">
      <div className="miniContentFooter">
        <h2 className="titleFooter">Sucursales</h2>
        <ul className="descriptionFooterUl">
          <li>Providencia, Region Metropolitana</li>
          <li>Santiago, Region Metropolitana</li>
          <li>La Serena, coqimbo</li>
        </ul>
      </div>
      <div className="miniContentFooter">
        <h2 className="titleFooter">Despachos</h2>
        <p className="descriptionFooterP">
          Despachos a todas las regiones de chile con sucursales
        </p>
      </div>
    </div>
  );
};

export default Footer;
