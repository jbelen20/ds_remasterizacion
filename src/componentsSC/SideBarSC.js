import styled from "styled-components";

export const Acategory = styled.li`
    padding: 1rem;
    border-top: 1px solid #fff;
    list-style-type: none;
    color:#fff;
    font-weight: 1000;
    &:hover{
    background: rgb(221,221,221);
    background: linear-gradient(25deg, rgba(221,221,221,0.05926120448179273) 0%, rgba(219,122,100,1) 51%, rgba(255,248,227,0) 100%);
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
    position: sticky;
    top: 1px;
    height: 100vh;
    z-index:1000;
    background: rgb(172,76,8);
    background: linear-gradient(25deg, rgba(172,76,8,1) 0%, rgba(219,122,42,1) 24%, rgba(255,248,227,0) 100%);
    width:22%;
    display: none;
    `