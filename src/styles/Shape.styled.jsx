import styled from "styled-components";

export const ShapeContainer = styled.div`
    height: 500px;
    width: 500px;
    background-color: #09090b;
    background-image: linear-gradient(#555555b2 1px, transparent 0), linear-gradient(90deg, #555555b2 1px, transparent 0);
    background-size: 60px 60px;
    background-position: center;
    overflow: hidden;
    position: absolute;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    bottom: ${({ bottom }) => bottom};
    z-index: -1;

    &::after {
        content: '';
        height: 100%;
        width: 100%;
        background: radial-gradient(circle,transparent, #09090b 80%);
        position: absolute;
        left: 0;
    }

    @media (max-width: 816px) {
        width: 100%;

        &::after {
            background: radial-gradient(circle,transparent, #09090b 60%);
        }
    }
`