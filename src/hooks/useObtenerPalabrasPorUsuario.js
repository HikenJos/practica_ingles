import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';

import { collection, onSnapshot, query, where} from 'firebase/firestore';
import {useAuth} from '../contextos/AuthContext';

function useObtenerPalabrasPorUsuario() {
    const user = useAuth();
    const [palabras, setPalabras] = useState([]);
    //const [ultimaPalabra, setUltimaPalabra] = useState(null);  //TODO LO COMENTADO ES PARA CARGAR DE 10 EN 10
    //const [MasPorCargar, setMasPorCargar] = useState(false);
    
    const docRef = query(collection(db, 'palabrasPersonalizadas'), where('usuario', '==', user.usuario.uid)); //QUERY PARA TRAER INFORMACION ESPECIFICA DE UN USUARIO
    //const docRef2 = query(collection(db, 'palabrasPersonalizadas'), where('usuario', '==', user.usuario.uid), orderBy('wordInEnglish'), limit(10), startAfter(ultimaPalabra));

    // function useObtenerMasPalabras(){
    //         onSnapshot(docRef2, (snapshot) => {
    //             if (snapshot.docs.length > 0){
    //                 setUltimaPalabra(snapshot.docs[snapshot.docs.length-1]);
    //                 setPalabras(palabras.concat(snapshot.docs.map((palabra) => {
    //                     return {...palabra.data(), id: palabra.id}
    //                 })));
    //             }else{
    //                 setMasPorCargar(false);
    //             }
    //         });
    //     };

    useEffect(() => {
        const unsucribe = onSnapshot(docRef, (snapshot) => {
            setPalabras(snapshot.docs.map((palabras) => {
            /*  if(snapshot.docs.length > 0){
                    setUltimaPalabra(snapshot.docs[snapshot.docs.length-1]);
                    setMasPorCargar(true);
                }else{
                    setMasPorCargar(false);
                }*/
                return {...palabras.data(), id:palabras.id}
            }));
        });

        return unsucribe;
        // eslint-disable-next-line
    }, [user.usuario]);

    return [palabras];
}

export default useObtenerPalabrasPorUsuario;