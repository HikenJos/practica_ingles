import styled from "styled-components";

const Header = styled.div`
width: 100%;
padding: 2.5rem;
display: flex;
justify-content: space-between;
align-items: center;
border: none;
`;



const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    @media(max-width: 60rem){ /* 950px */
    display: flex;
    width: 100%;
    height: 14vh;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    }
`;

const ContainerButton = styled.div`
width:40%;
    display: flex;
    justify-content: space-evenly;
    padding: 0  0.4rem;

    @media(max-width: 60rem){ /* 950px */
    display: flex;
    width: 100vw;
    justify-content: ${(props) => props.cerrarSesion ? 'flex-end' : 'space-between'};
    }
`;

const ContainerButton2 = styled.div`
width: 58%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 0  0.4rem;
    @media(max-width: 60rem){ /* 950px */
    width: 100vw;
    justify-content: ${(props) => props.cerrarSesion ? 'flex-end' : 'space-between'};
    }
`;

export {Header, ContainerHeader, ContainerButton2, ContainerButton};