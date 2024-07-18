import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    background-color: #09090b85;
    backdrop-filter: blur(10px);
    position: fixed;
    display: flex;
    justify-content: center;

    .wrapper {
        width: 1112px;
    padding-top: 1rem;
    padding-bottom: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:nth-child(1) {
        font-family: 'Satoshi', sans-serif;
        font-weight: 800;
        color: #ffffffeb;
        letter-spacing: .5px;
    }

    @media (max-width: 1115px) {
        width: 100%;
        padding: 1.5rem 1rem;
    }
    }
`