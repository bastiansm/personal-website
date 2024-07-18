import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1115px) {
        padding: 0 1rem;
    }
`

export const FooterWrapper = styled.div`
    width: 1112px;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #a1a1aa29;

    div{
        display: flex;
        gap: 5px;
        color: #a1a1aa;

        &:nth-child(1) {
            flex-direction: column;
            span {
                &:nth-child(1) {
                    color: #ffffffeb;
                font-weight: 800;
                letter-spacing: .5px;
                font-family: 'Satoshi', sans-serif;
                }

                &:nth-child(2), &:nth-child(3) {
                    color: #ffffff47;
                    font-size: .8rem;
                }
            }
        }

        &:nth-child(2) {
                a {
                color: #ffffffeb;
                font-size: .9rem;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media (max-width: 1115px) {
        width: 100%;
    }

    @media (max-width: 437px) {

        div {
            width: 100%;
        }

        gap: 1.25rem;
        flex-direction: column;
        justify-content: flex-start;
    }
`