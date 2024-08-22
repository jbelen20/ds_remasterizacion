import styled from "styled-components";



export const Title = styled.p`
  margin-top: 48rem;
  font-size: 2.5rem;
  margin-bottom: 0%;
  font-family: "Dancing Script", cursive;
`;

export const Content = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const ContentSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  height: 30rem;
  width: 85%;
  align-items: center;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 15rem;
  transition: 0.3s ease all;
  z-index: 9;
  margin-bottom: 3rem;
  img {
    width: 10rem;
    height: 20rem;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 15;
  pointer-events: none;
`;

export const Boton = styled.button`
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
  ${(props) => (props.izquierdo ? "right:570px" : "left:610px")}
`;
