import styled from "styled-components";

const Body = styled.div`
width: 100%;
height: 100%;
padding: 2.5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
@media(max-width: 60rem){ /* 950px */
    padding: 0;
    }
`;

const ContainerBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    align-items: center;
    
`;

export {Body, ContainerBody};