import styled from "styled-components";


export const Content = styled.div`
  position: none;
  margin-top: -9rem;
`;

export const PrincipalContent = styled.div`
  position: absolute;
  z-index: 0;
  overflow: hidden;
  top:0rem;
`;

export const ContentSlideShow = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  img {
    width: 100%;
    height: 105vh;
    object-fit: cover;
    margin-top: 0;
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
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
  ${(props) => (props.izquierdo ? "right:550px" : "left:550px")}
`;

export const Pragraph = styled.p`
  position: absolute;
  top: ${(props) => props.top || "30%"};
  z-index: 15;
  font-size: ${(props) => props.fontSize};
  font-family: "Josefin Sans", sans-serif;
  color: ${(props) => props.color || "#fff"};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginLeft || "7rem"};
  background: ${(props) => props.background || "none"};
  text-shadow: 1px 1px 1px #ddd;
`;

export const Click = styled.button`
  position: absolute;
  top: ${(props) => props.top || "70%"};
  z-index: 15;
  width: 15rem;
  height: 2.5rem;
  margin-left: ${(props) => props.marginLeft || "8rem"};
  border: none;
  font-size: 1.1rem;
  background: ${(props) => props.background || "gray"};
  color: #fff;
  text-shadow: 1px 1px 3px rgb(48, 48, 48);

  &:hover {
    background: none;
    border: 2px solid ${(props) => props.borderHover};
    color: ${(props) => props.colorHover};
  }
`;