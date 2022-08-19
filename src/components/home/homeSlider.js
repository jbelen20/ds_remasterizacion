import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";

import styled from "styled-components";
import img1 from "../../image/pasteles.jpg";
import img2 from "../../image/pastelesMacro.jpg";
import img3 from "../../image/tortaChocolate.jpg";

const HomeSlider = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;
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
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <ContenedorPrincipal>
      {/* slideshow */}
      <ContenedorSlideShow ref={slideshow}>
        <Slide>
          <a href="https://www.google.com">
            <img src={img1} alt="" />
          </a>
        </Slide>

        <Slide>
          <a href="https://www.google.com">
            <img src={img2} alt="" />
          </a>
        </Slide>

        <Slide>
          <a href="https://www.google.com">
            <img src={img3} alt="" />
          </a>
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
  );
};

const ContenedorPrincipal = styled.div`
  position: absolute;
  z-index: 0;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 1;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    margin-top: 0;
    border-radius: 10px;
  }
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
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
  ${(props) => (props.izquierdo ? "right:600px" : "left:600px")}
`;

export default HomeSlider;
