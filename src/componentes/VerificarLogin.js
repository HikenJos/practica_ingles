import React, {useEffect} from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth } from '../contextos/AuthContext';

function refreshPage() {
    window.location.reload(false);
  }

function VerificarLogin (children) {
    const {usuario} = useAuth();

    useEffect(() => {
        refreshPage()
    }, []);

    return usuario ? <Navigate to='/'/> : <Navigate to='/0ahUKEwiGiovF8b_5AhWyZTABHbocDc4Q4dUDCA4uact5oqpa'/>;
}

export default VerificarLogin;