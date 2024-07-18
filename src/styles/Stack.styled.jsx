import styled from "styled-components";

export const StackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 10rem;

    .wrapper {
        display: flex;
        gap: 1rem;

        &:nth-child(1) {
        width: 700px;
        align-items: center;
        text-align: center;
        flex-direction: column;
        }

        &:nth-child(2) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
    }
    
    @media (max-width: 700px) {
        .wrapper:nth-child(1) {
            width: 100%;
        }
    }

    @media (max-width: 500px) {
        .wrapper:nth-child(2) {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    @media (max-width: 428px) {
        padding-bottom: 5rem;
    }

    @media (max-width: 416px) {
        .wrapper:nth-child(2) {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`

export const TechItem = styled.span`
    padding: 10px;
    border: 2px solid #27272a;
    border-radius: 8px;
    color: #a1a1aa;
    background: linear-gradient(180deg, rgba(24, 24, 27, .6), rgba(24, 24, 27, 0));
    transition: .3s;

    &:hover {
        border: 2px solid #828286;
    }
`