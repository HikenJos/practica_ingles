import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';

function useObtenerPalabra(id) {
    const [palabra, setPalabra] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        const docRef = doc(db, 'palabrasPersonalizadas', id);
        
        getDoc(docRef)
        .then((doc) => {
            if(doc.exists()){
                setPalabra(doc);
            }else{
                console.log('holamudno')
                navigate(-1);
            }
        })
    }, []);

    return [palabra];
}

export default useObtenerPalabra;