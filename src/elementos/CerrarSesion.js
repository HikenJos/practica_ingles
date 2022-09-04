import React from 'react';
import { Auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { ButtonMS } from './BotonMenuPrincipal';

function CerrarSesion() {
    const navigate = useNavigate();

    async function cerrarSesion() {
        try {
            await Auth.signOut();
            window.location.reload(false);
            navigate('/login')
        } catch (e) {
            
        }
    }
    

    return ( 
        <ButtonMS as="button" cerrarSesion onClick={cerrarSesion}>
            Cerrar Sesión
        </ButtonMS>
     );
}

export default CerrarSesion;