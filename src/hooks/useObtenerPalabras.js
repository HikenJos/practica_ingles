import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
// eslint-disable-next-line
import { collection, onSnapshot, query, where} from 'firebase/firestore';
import {useAuth} from '../contextos/AuthContext';

function useObtenerPalabras() {
    const user = useAuth();
    const [palabras, setPalabras] = useState([]);
    //const docRef = query(collection(db, 'palabras'), where('usuario', '==', user.usuario.uid)); QUERY PARA TRAER INFORMACION ESPECIFICA DE UN USUARIO
    

    useEffect(() => {
        const docRef = query(collection(db, 'palabras'));
        const unsucribe = onSnapshot(docRef, (snapshot) => {
            setPalabras(snapshot.docs.map((palabras) => {
                return {...palabras.data(), id:palabras.id}
            }));
            // let palabrass = []
            // snapshot.docs.forEach((doc) => {  TODO ESTO ES PARA TRAER SOLO INFORMACION ESPECIFICA DE UN USUARIO
            //     setPalabras(palabrass.push({...doc.data(), id: doc.id}))
            // });
        });

        return unsucribe;
        
    }, [user.usuario]);

    return [palabras];
}

export default useObtenerPalabras;