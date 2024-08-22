import React from "react";
import {ContainFooter, SectiontFooter, Titles, Descriptions, DescriptionFooterUl} from '../../componentsSC/FooterSC'


const Footer = () => {
  return (
    <ContainFooter>
      <SectiontFooter>
        <Titles>Sucursales</Titles>
        <DescriptionFooterUl>
          <li>Providencia, Region Metropolitana</li>
          <li>Santiago, Region Metropolitana</li>
          <li>La Serena, coqimbo</li>
        </DescriptionFooterUl>
      </SectiontFooter>
      <SectiontFooter>
        <Titles>Despachos</Titles>
        <Descriptions>
          Despachos a todas las regiones de chile con sucursales
        </Descriptions>
      </SectiontFooter>
    </ContainFooter>
  );
};


export default Footer;
