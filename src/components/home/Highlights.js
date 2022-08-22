import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";

import styled from "styled-components";
import img1 from "../../image/pasteles.jpg";
import img2 from "../../image/macarron.jpg";
import img3 from "../../image/tortaChocolate.jpg";
import CardHighlights from "./CardHighlights";

const Highlights = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `200ms ease-out all`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = `none`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `200ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <>
      <Titular>Destacados</Titular>
      <ContenedorPrincipal>
        {/* slideshow */}
        <ContenedorSlideShow ref={slideshow}>
          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>

          <Slide>
            <CardHighlights />
          </Slide>
        </ContenedorSlideShow>

        {/* controles */}
        <Controls>
          <Boton izquierdo onClick={anterior}>
            <ArrowLeft />
          </Boton>
          <Boton onClick={siguiente}>
            <ArrowRight />
          </Boton>
        </Controls>
      </ContenedorPrincipal>
    </>
  );
};

const Titular = styled.p`
  margin-top: 40rem;
  font-size: 2.5rem;
  font-family: "Dancing Script", cursive;
`;

const ContenedorPrincipal = styled.div`
  margin-top: 4rem;
  position: relative;
  z-index: 0;
  width: 80%;
  display: flex;
  justify-content: center;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  width: 15rem;
  transition: 0.3s ease all;
  z-index: 9;
  margin-bottom: 3rem;
  img {
    width: 10rem;
    height: 12rem;
    object-fit: cover;
    margin-top: 0;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 15;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  width: 30px;
  outline: none;
  position: absolute;
  transition: 0.9s ease all;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }
  path {
    filter: ${(props) =>
      props.izquierdo
        ? "drop-shadow(2px 0px 0px #fff)"
        : "drop-shadow(-2px 0px 0px #fff)"};
  }
  ${(props) => (props.izquierdo ? "right:470px" : "left:710px")}
`;

export default Highlights;
