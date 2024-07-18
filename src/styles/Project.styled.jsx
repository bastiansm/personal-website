import styled from "styled-components";

export const ProjectContainer = styled.div`
    /* padding: 3rem 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: blue; */
    width: 100%;
    gap: 2rem;
    padding-bottom: 5rem;
    
    .wrapper {
        /* background-color: yellow; */
        display: flex;
        gap: 1rem;
    }

    .wrapper:nth-child(1) {
        width: 700px;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }

    .wrapper:nth-child(2) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 816px) {
        .wrapper:nth-child(1) {
            width: 100%;
            padding: 0 1rem;
        }

        .wrapper:nth-child(2) {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 475px) {
        .wrapper:nth-child(2) {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 1139px) {
        .wrapper:nth-child(2) {
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }

    @media (min-width: 1440px) {
        padding-top: 3rem;
    }
`

export const ProjectItem = styled.a`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    height: 190px;
    width: 360px;
    border: 1px solid #27272a;
    border-radius: 1rem;
    background: linear-gradient(180deg, rgba(24, 24, 27, .6), rgba(24, 24, 27, 0));
    cursor: pointer;
    transition: .3s;

    &:hover {
        border: 1px solid #828286;
    }

    .item-wrap {
        display: flex;
        /* align-items: center; */
        gap: 8px;

        &:nth-child(2) {
            flex-direction: column;
        }
    }

    @media (max-width: 1139px) {
        width: 100%;
    }
`

export const ProjectIcon = styled.div`
    height: 2rem;
    width: 2rem;
    color: #b5b5b7;
    background-image: linear-gradient(180deg, rgba(39, 39, 42, .68), rgba(39, 39, 42, 0));
    border: 1px solid #3f3f46;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`