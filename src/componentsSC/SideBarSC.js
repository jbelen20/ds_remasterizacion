import styled from "styled-components";

export const Acategory = styled.li`
    padding: 1rem;
    border-top: 1px solid #fff;
    list-style-type: none;
    color:#fff;
    font-weight: 1000;
    &:hover{
    background: rgba(1,1,1, 0.3);
    }
  
`
export const TitleCategory = styled.p`
    margin:  0;
    padding: 4rem;
    color:#fff;
    font-weight: 1000;
`


export const ConstentSideBar = styled.div`
    margin-top: 1rem ;
    margin-left: -10rem;
    position: fixed;
    top: -15px;
    height: 100vh;
    z-index:1000;
    backdrop-filter: brightness(70%);
    width:22%;
    display: none;
    left:10rem;
    `