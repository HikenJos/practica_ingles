import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../contextos/AuthContext';


function Verificado(children) {
    const {usuario} = useAuth();
    
    return usuario ? <Navigate to='/'/> : <Navigate to='/login'/>;
}

export default Verificado;