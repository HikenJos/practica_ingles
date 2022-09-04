import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../Tema";

const ContenedorLista = styled.div`
width: 100%;
height: 5rem;
display: flex;
flex-direction: row;
justify-content: center;
border-bottom: 1px solid ${theme.grisClaro2};
`;

const ContenedorBoton = styled.div`
width: 50%;
display: flex;
justify-content: ${(props) => props.list ? 'space-between' : 'space-around'};
align-items: center;
`;

const ContenedorCentral = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const CeldaPalabra = styled.div`
width: 50%;
font-family: 'Silkscreen', sans-serif;
font-size: 2rem;
display: flex;
justify-content: center;
text-shadow: 2px 5px 5px;
align-items: center;
text-transform: uppercase;

@media(max-width: 60rem){ /* 950px */
        font-size: 1.2rem; /* 32px */
    }
`;

const ButtonEdit = styled(Link)`
    position: relative;
    background: ${theme.verde};
    width: ${(props) => props.conIcono ? '15.62rem' : '7rem'}; /* 250px */
    color: ${ theme.colorSecundario};
    font-family: 'Nunito';
    height: 2.15rem; /* 60px */
    padding: 0.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 0.625rem;
    transition: all 250ms ease-in-out;
    box-shadow: 4px 4px #1C2833;
    overflow: hidden;
    text-transform: capitalize;
    z-index: 1;

    ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 0.625rem;
    background-color: ${theme.colorHover};
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(222,182,7,0.27);
    box-shadow: 4px 8px 19px 3px rgba(222,182,7,0.27);
    transition: all 650ms
    }

        :hover {
    color: ${theme.colorSecundario};
    }

        :hover::before {
    width: 100%;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 32px */
        width: 3.4rem ;
        height: 1.15rem; /* 60px */
        padding: 1rem 0.3rem; 
    }
`;

const ButtonDelete = styled.button`
    position: relative;
    display: flex;
    background: ${theme.rojo};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    color: ${ theme.colorSecundario};
    font-family: 'Nunito';
    height: 2.15rem; /* 60px */
    padding: 0.25rem 1.4rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
    border: 1px solid black;
    border-radius: 0.625rem;
    transition: all 250ms ease-in-out;
    box-shadow: 4px 4px #1C2833;
    overflow: hidden;
    text-transform: capitalize;
    z-index: 1;

    ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 0.625rem;
    background-color: ${theme.colorHover};
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(222,182,7,0.27);
    box-shadow: 4px 8px 19px 3px rgba(222,182,7,0.27);
    transition: all 650ms
    }

        :hover {
    color: ${theme.colorSecundario};
    }

        :hover::before {
    width: 100%;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 1rem; /* 32px */
        width: 4.5rem ;
        height: 2.15rem; /* 60px */
        padding: 1rem 0.3rem; 
    }
`;

export {ContenedorLista, CeldaPalabra, ContenedorBoton, ButtonEdit, ButtonDelete, ContenedorCentral}