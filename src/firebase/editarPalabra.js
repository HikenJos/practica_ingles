import { db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

//RECIBIR OBJETO DE FORMULARIO
function EditarPalabraCustom(id, wordEnglish, wordSpanish) {
    const docRef = doc(db, 'palabrasPersonalizadas', id);
    const payload = {
        wordInEnglish: wordEnglish || null,
        wordInSpanish: wordSpanish
    };
        const UpdateDoc = updateDoc(docRef, payload);
        
        return UpdateDoc;
    
}

export default EditarPalabraCustom;