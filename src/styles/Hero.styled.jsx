import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 13rem 0 8rem 0;

    @media (max-width: 816px) {
        width: 100%;
        padding: 13rem 1rem 8rem 1rem;

        .HeroTitle {
            font-size: 3rem;
        }
    }

    @media (max-width: 441px) {
        .HeroTitle {
            font-size: 2.5rem;
        }
    }

    /* @media (max-width: 1440px) {
        height: 100vh;
    }

    @media (min-width: 1440px) {
        padding: 10rem 0;
        height: fit-content;
    } */
`