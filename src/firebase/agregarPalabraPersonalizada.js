import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

//RECIBIR OBJETO DE FORMULARIO
async function agregarPalabraPersonalizada(wordEnglish, wordSpanish, user) {
    const docRef = collection(db, 'palabrasPersonalizadas');
    const payload = {
        wordInEnglish: wordEnglish || null,
        wordInSpanish: wordSpanish,
        usuario: user
    };
    
        const addoc = await addDoc(docRef, payload);
        
        return addoc;
    
}

export default agregarPalabraPersonalizada;