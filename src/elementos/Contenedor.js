import styled from "styled-components";
import theme from "../Tema";

const content = styled.div`
    background: ${theme.fondoContenedor};
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index:100;

    @media(max-width: 60rem){ /* 950px */
        height: 95vh;
        max-height: none;
    }
`;

export default content;