import styled from "styled-components";

export const ContentWe = styled.div`
  position: absolute;
  width: 100%;

`
export const Title = styled.h2`
  position: absolute;
  top: 10%;
  color: #fff;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2rem;
  width: 40%;
  margin-left: 6rem;
  text-shadow: 1px 1px 1px rgb(151, 150, 150);
`
export const Text = styled.p`
  position: absolute;
  top: 20%;
  color: #fff;
  font-family: "Dancing Script", cursive;
  font-size: 2rem;
  width: 40%;
  margin-left: 6rem;
  text-shadow: 3px 3px 3px rgb(48, 48, 48);

`
export const Button = styled.button`
  position: absolute;
  top: 55%;
  left: 14rem;
  z-index: 1000;
  background: rgb(36, 99, 0);
  color: #fff;
  width: 15rem;
  height: 2.5rem;
  border: none;
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgb(48, 48, 48);
  &:hover{
    border: 3px solid rgb(88, 221, 12);
    background: none;
  }
`
export const Video = styled.video`
    width: 100%;
    height: 25rem;
    object-fit: cover;
    margin-bottom: 10rem;
`