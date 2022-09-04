import { db } from '../firebase/firebaseConfig';
import { doc, deleteDoc} from 'firebase/firestore';

function eliminarPalabra(id){
    const docRef = doc(db, 'palabrasPersonalizadas', id);
    deleteDoc(docRef);
}

export default eliminarPalabra;