import styled from "styled-components";

export const ContentFormAccount = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 60%;
    border: 5px #e9e9e9 solid;
`

export const RegistrationTitle = styled.h2`
    display: flex;
    justify-content: center;
    font-weight: 300;
    font-size: 2rem;
`

export const Fields =  styled.div`
    margin: 2rem ;
    display:flex;
    justify-content: space-between;
`

export const ButtonCreateAccount =  styled.button`
    background: green;
    color: #fff;
    margin: 0 0 1rem 6rem;
    display: flex;
    justify-content: center;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    &:hover{
        background: #14620b;
    }
`