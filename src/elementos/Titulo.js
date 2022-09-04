import styled from "styled-components";
import theme from "../Tema";


const Tittle = styled.div`

    font-family: 'Silkscreen', sans-serif;
    //height: 4.15rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 2.25rem; /* 20px */
    font-weight: 800;
    text-shadow: 3px 5px 10px;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    @media(max-width: 60rem){ /* 950px */
        font-size: ${(props) => props.primario ? '2.8rem' : '0.8rem'};
    }
`;

const Title = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    font-family: 'Rubik Dirt';
    color: ${theme.colorTitulo};

    @media(max-width: 60rem){ /* 950px */
        font-size: ${(props) => props.add ? '1.2rem' : '1.6rem'}
    }
`;

const Label = styled.label`
    font-weight: normal;
    text-transform: capitalize;
    font-size: 1rem; /* 40px */
    font-family: 'Rubik Dirt';
    color: ${theme.BgSecundario};

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem; /* 32px */
    }
`;

export {Tittle, Title, Label}