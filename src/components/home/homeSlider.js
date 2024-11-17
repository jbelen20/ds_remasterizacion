import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {Content, PrincipalContent, ContentSlideShow, Slide, Controls, Boton, Pragraph, Click} from '../../componentsSC/HomeSlideSC'

//image
import { ReactComponent as ArrowLeft } from "../../image/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../image/arrowRight.svg";

import img1 from "../../image/cupcake.jpg";
import img2 from "../../image/macarron.jpg";
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
    <Content>
      <PrincipalContent>
        {/* slideshow */}
        <ContentSlideShow ref={slideshow}>
          <Slide>
            <img src={img1} alt="" />
            <div>
              <Pragraph
                marginLeft="55%"
                fontSize="2.2rem"
                width="22rem"
                color="#4e2004"
                top="20%"
              >
                Ven a probar nuestaras delicias de dulce sabor, todo elaborado
                con dedicacion y cariño al arte de cocinar
              </Pragraph>
              <Link to="/allproducts">
                <Click
                  top="60%"
                  marginLeft="7.5rem"
                  background="#4e2004"
                  borderHover="#4e2004"
                  colorHover="#4e2004"
                >
                  Ver más
                </Click>
              </Link>
            </div>
          </Slide>

          <Slide>
            <img src={img2} alt="" />
            <div>
              <Pragraph
                fontSize="2.6rem"
                width="25rem"
                marginLeft="60%"
                top="15%"
              >
                Batir con amor, Hornear con pasion, Decorar con el corazon.
              </Pragraph>
              <Link to="/allproducts">
                <Click
                  top="50%"
                  marginLeft="16%"
                  background="#a9de6b"
                  borderHover="#a9de6b"
                  colorHover="#a9de6b"
                >
                  Ver más
                </Click>
              </Link>
            </div>
          </Slide>

          <Slide>
            <img src={img3} alt="" />
            <div>
              <Pragraph
                fontSize="3rem"
                width="18rem"
                marginLeft="15%"
                color="#fff"
                top="30%"
              >
                Es un placer ser tu placer
              </Pragraph>
              <Link to="/allproducts">
                <Click
                  top="60%"
                  marginLeft="-34%"
                  background="#d98105"
                  borderHover="#d98105"
                  colorHover="#d98105"
                >
                  Ver más
                </Click>
              </Link>
            </div>
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
      </PrincipalContent>
    </Content>
  );
};

export default HomeSlider;
