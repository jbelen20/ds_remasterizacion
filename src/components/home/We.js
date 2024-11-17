import React from "react";
import { Link } from "react-router-dom";
import video from "../../image/video.mp4";
import {ContentWe,Title, Text, Button, Video} from '../../componentsSC/WeSC'
import styled from "styled-components";

const We = () => {
  return (
    <ContentWe>
      <div>
        <Video loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </Video>
        <Title>Nosotros</Title>
        <Text>
          Somos una pasteleria con mas de 50 años de experiencia, dulce sabor
          proviene de recetas familiares trasendentales transmitidas con cariño
          al publico
        </Text>
        <Link to="wedetails">
          <Button>Ver más</Button>
        </Link>
      </div>
    </ContentWe>
  );
};



export default We;
