import styled from "styled-components";
import {Link} from "react-router-dom"
import theme from "../Tema";


const ButtonMP = styled(Link)`
    position: relative;
    background: ${ theme.BgPrimario};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    color: ${ theme.colorPrimario};
    font-family: 'Nunito';
    height: 4.15rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
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
        width:  30vh;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem; /* 32px */
    }
`;

const ButtonMS = styled(Link)`
    position: relative;
    background: ${theme.BgSecundario};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    color: ${theme.colorPrimario};
    font-family: 'Nunito';
    height: 2.15rem; /* 60px */
    padding: 0.25rem 0.87rem; /* 20px 30px */
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
    z-index: 1;

        :hover {
    color: ${theme.BgPrimario};
    }

        :hover::before {
    width: 100%;
    }

    @media(max-width: 60rem){ /* 950px */
        font-size: 0.8rem; /* 32px */
        width: ${(props) => props.symbol ? '10vh' : '30vh'} ;
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export {ButtonMP, ButtonMS}