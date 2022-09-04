import React from 'react';
import { Helmet } from 'react-helmet';
import { ContainerButton, ContainerHeader, Header } from '../elementos/Cabezera';
import { Body } from '../elementos/Cuerpo';
import { ButtonDelete, ButtonEdit, CeldaPalabra, ContenedorBoton, ContenedorCentral, ContenedorLista } from '../elementos/Lista/Contenedor';
import { Title, Tittle } from '../elementos/Titulo';
import useObtenerPalabrasPorUsuario from '../hooks/useObtenerPalabrasPorUsuario';
import eliminarPalabra from '../firebase/eliminarPalabra';
import { BtnBackIngles, BtnVolver } from '../elementos/BotonRegresar';

function ListadoPalabrasPersonalizadas() {
    const [palabrasPersonalizadas] = useObtenerPalabrasPorUsuario();

    return ( 
        <>
            <Helmet>
                <title>Listado de palabras</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Lista de palabras</Title>
                    <ContainerButton>
                        <BtnBackIngles ruta='/practica/custom'>Practica!</BtnBackIngles>
                        <BtnVolver ruta='/practica/custom/agrega-palabras'>Volver</BtnVolver>
                    </ContainerButton>
                </ContainerHeader>           
            </Header>
            <Body>
                <div>
                    {palabrasPersonalizadas.map((palabra) => {
                        return(
                            <ContenedorLista key={palabra.id}>
                                <CeldaPalabra>
                                    {palabra.wordInEnglish}
                                </CeldaPalabra>
                                <CeldaPalabra>
                                    {palabra.wordInSpanish}
                                </CeldaPalabra>
                                <ContenedorBoton list>
                                    <ButtonEdit to={`editar-palabra/${palabra.id}`}>editar</ButtonEdit>
                                    <ButtonDelete  onClick={() => eliminarPalabra(palabra.id)}>eliminar</ButtonDelete>
                                </ContenedorBoton>
                            </ContenedorLista>
                        );
                    })}
                    {palabrasPersonalizadas.length === 0 && 
                    <ContenedorCentral>
                        <Tittle>You haven't words yet</Tittle>
                    </ContenedorCentral>
                    }
                </div>
            </Body>
        </>
     );
}

export default ListadoPalabrasPersonalizadas
