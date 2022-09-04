import React, { useState, useEffect, useContext } from 'react';
import { Auth } from '../firebase/firebaseConfig';
import {onAuthStateChanged} from 'firebase/auth'

const AuthContext = React.createContext();

function useAuth() {
 return useContext(AuthContext);
}

function AuthProvider ({children}) {
    const [usuario, setUsuario] = useState();
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cancelarSubscripcion = onAuthStateChanged(Auth, usuario => {
            setUsuario(usuario);
            setCargando(false);
        });
        return cancelarSubscripcion();
    }, []);

    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
     );
}

export {AuthProvider, useAuth};