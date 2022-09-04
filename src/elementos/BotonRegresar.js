
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../Tema';


const ButtonBack = styled.button`
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
`;

const BtnBack = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <ButtonBack onClick={() => (navigate(ruta))}>INICIO</ButtonBack>
     );
}

const BtnBackIngles = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <ButtonBack onClick={() => (navigate(ruta))}>EN INGLÉS</ButtonBack>
     );
}

const BtnBackEspanol = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <ButtonBack onClick={() => (navigate(ruta))}>EN ESPAÑOL</ButtonBack>
     );
}

const BtnListado = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <ButtonBack onClick={() => (navigate(ruta))}>LISTADO</ButtonBack>
     );
}

const BtnVolver = ({ruta = '/'}) => {
    const navigate = useNavigate();
    return ( 
        <ButtonBack onClick={() => (navigate(ruta))}>Volver</ButtonBack>
     );
}
export {BtnBack, BtnBackIngles, BtnBackEspanol, BtnListado, BtnVolver};