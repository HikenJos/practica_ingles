import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import InicioSesion from './componentes/InicioSesion';
import RegistroUsuario from './componentes/RegistroUsuario';
import AdivinaLaPalabra from './componentes/AdivinaLaPalabra';
import AdivinaLaPalabraEspanol from './componentes/AdivinaLaPalabraEspanol';
import AgregarUnaPalabraNueva from './componentes/AgregarUnaPalabraNueva';
import PracticaPalabrasPersonalizadas from './componentes/PracticaPalabrasPersonalizadas';
import {AuthProvider} from './contextos/AuthContext';
import RutaProtegida from './componentes/RutaPrivada';
import VerificarLogin from './componentes/VerificarLogin';
import Verificado from './componentes/Verificado';
import AgregarPalabraPersonalizada from './componentes/AgregarPalabraPersonalizada';
import ListadoPalabrasPersonalizadas from './componentes/ListadoPalabrasPersonalizadas';
import EditarPalabraPersonalizada from './componentes/EditarPalabraPersonalizada';
import PracticaPalabrasPersonalizadasEspanol from './componentes/PracticaPalabrasPersonalizadasEspanol';


WebFont.load({
  google: {
    families: ['Silkscreen:400,500,600', 'cursive', 'Nunito:400,500,600,700', 'sans-serif', 'Rubik Dirt:400']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path='/' element=
                {<RutaProtegida>
                  <App/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica' element=
                {<RutaProtegida>
                  <AdivinaLaPalabra/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/practica-en-espanol' element=
                {<RutaProtegida>
                  <AdivinaLaPalabraEspanol/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/custom' element=
                {<RutaProtegida>
                  <PracticaPalabrasPersonalizadas/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/custom/agrega-palabras' element=
                {<RutaProtegida>
                  <AgregarPalabraPersonalizada/>
                </RutaProtegida>}>
              </Route>
              <Route path='/anade-una-palabra-nuevaa' element=
                {<RutaProtegida>
                  <AgregarUnaPalabraNueva/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/custom/agrega-palabras/listado' element=
                {<RutaProtegida>
                  <ListadoPalabrasPersonalizadas/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/custom/agrega-palabras/listado/editar-palabra/:id' element=
                {<RutaProtegida>
                  <EditarPalabraPersonalizada/>
                </RutaProtegida>}>
              </Route>
              <Route path='/practica/custom/practica-en-espanol' element=
                {<RutaProtegida>
                  <PracticaPalabrasPersonalizadasEspanol/>
                </RutaProtegida>}>
              </Route>
              <Route path='/ALiCzsbDCrx8N0qK7R1XBXRGMhbdmbcYww3A1660258676300eidIn1YoaAErLLwbkPurm08Awved' element={<VerificarLogin/>} />
              <Route path='/0ahUKEwiGiovF8b_5AhWyZTABHbocDc4Q4dUDCA4uact5oqpa' element={<Verificado/>} />
              <Route path='/login' element={<InicioSesion />} />
              <Route path='/registro' element={<RegistroUsuario />} />
            </Routes>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>

      
    </>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
