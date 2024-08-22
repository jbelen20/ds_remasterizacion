import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";
import CardHighlights from "./CardHighlights";
import {Title, Content, ContentSlideShow, Boton, Controls, Slide} from '../../componentsSC/HighlightsSC'

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
      <Title>Destacados</Title>
      <Content>
        {/* slideshow */}
        <ContentSlideShow ref={slideshow}>
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
        </ContentSlideShow>

        {/* controles */}
        <Controls>
          <Boton izquierdo onClick={anterior}>
            <ArrowLeft />
          </Boton>
          <Boton onClick={siguiente}>
            <ArrowRight />
          </Boton>
        </Controls>
      </Content>
    </>
  );
};

export default Highlights;
