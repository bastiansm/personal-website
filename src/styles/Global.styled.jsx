import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
    width: 8px; /* Lebar scrollbar */
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #09090b; /* Warna background track */
    border-radius: 10px; /* Radius track untuk membuat sudut bulat */
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #ffffffeb; /* Warna handle */
    border-radius: 10px; /* Radius handle untuk membuat sudut bulat */
    }

    /* Handle saat di-hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #a1a1aa; /* Warna handle saat di-hover */
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #09090b;
        font-family: 'Inter', sans-serif;
    }

    img, a {
        user-select: none;
    }

    a {
        text-decoration: none;
    }

    .app {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const GradientText = styled.span`
    font-size: ${({ size }) => size};
    font-weight: ${({ weight }) => weight};
    line-height: 1.15;
    background-image: linear-gradient(0deg, rgb(105, 105, 105) 0%, rgb(255, 255, 255) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`

const ParaColor = {
    white: `
        color: #ffffffeb;
    `,
    grey: `
        color: #a1a1aa;
    `,
}

export const ParaText = styled.span`
    font-size: .9rem;
    font-weight: ${({ weight }) => weight};
    line-height: 1.7;
    ${({ variant }) => ParaColor[variant] || ParaColor.white}
`