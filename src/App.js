import React from 'react';
import Helmet from 'react-helmet';
import {Header, ContainerHeader, ContainerButton} from './elementos/Cabezera';
import CerrarSesion from './elementos/CerrarSesion';
import { Body, ContainerBody } from './elementos/Cuerpo';
import {ButtonMP} from './elementos/BotonMenuPrincipal';
import {Tittle, Title} from './elementos/Titulo';

function App() {
  return ( 
    <>
      <Helmet>
        <title>Bienvenido</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <Title>Practica tu Inglés</Title>
          <ContainerButton cerrarSesion>
            <CerrarSesion />
          </ContainerButton>
        </ContainerHeader>
      </Header>
      <Body>
          <ContainerBody>
            <Tittle>Practica unos minutos al día</Tittle>
          </ContainerBody>
          <ContainerBody>
            <ButtonMP to='/practica'>EMPIEZA YA!</ButtonMP>
          </ContainerBody>
          <ContainerBody>
            <ButtonMP to='/practica/custom'>PRACTICA CON TUS PALABRAS</ButtonMP>
          </ContainerBody>
      </Body>
    </>
   );
}

export default App;