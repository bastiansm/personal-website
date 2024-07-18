import styled from "styled-components";

export const Btn1 = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    background: linear-gradient(to top, #09090b, #1d1d21);
    color: #bcbcbc;
    font-weight: 500;
    font-size: 1rem;
    border: 1px solid #2d2d35;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(to top, #1d1d21, #09090b);
        animation: button-particles 1s ease-in-out infinite;
    }
`

export const Btn2 = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 15px;
    color: #a1a1aa;
    font-weight: 500;
    font-size: .9rem;
    border: 1px solid #2d2d35;
    border-radius: 30px;
    cursor: pointer;
    transition: .2s;

    &:hover {
        border: 1px solid #818181;
    }
`