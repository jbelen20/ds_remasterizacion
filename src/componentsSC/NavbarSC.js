import styled from 'styled-components';


export const Content = styled.div`
  top: 0px;
  height: 9rem;
  position: sticky;
  z-index: 100;
  background: rgb(242, 243, 244);
  background: linear-gradient(
    0deg,
    rgba(242, 243, 244, 0.00043767507002800965) 20%,
    rgba(176, 178, 180, 0) 43%,
    rgba(3, 26, 79, 0.5522584033613445) 65%,
    rgba(0, 17, 52, 1) 100%
  );
`;

export const GroupOfElements = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -15px;
`;

// z-index: ${(props)=>props.zindex || 15};
export const Icons = styled.svg`
  position: relative;
  top: 19px;
  z-index: 15;
  fill: #ddd;
  margin: 1rem;
  &:hover {
    fill: ${(props) => props.fill || "#d98105"};
    transform: scale(1.2);
  }
`;

export const IconMenu = styled.svg`
  margin-top: 2.1rem;
`

export const Image = styled.img`
  width: 7rem;
  position: relative;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  position: absolute;
  width: 11rem;
`;

export const TitleNav = styled.h1`
  font-family: "Dancing Script", cursive;
  font-weight: 200;
  margin: 0 auto;
  position: absolute;
  width: 13rem;
  top: 60%;
  z-index: 10;
`;

