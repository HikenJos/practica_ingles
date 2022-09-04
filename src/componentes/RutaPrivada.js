import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../contextos/AuthContext';

function RutaProtegida({children}) {
    const {usuario} = useAuth();

            return usuario ? children : <Navigate to='/ALiCzsbDCrx8N0qK7R1XBXRGMhbdmbcYww3A1660258676300eidIn1YoaAErLLwbkPurm08Awved'/>;
            
}

export default RutaProtegida;