import { collection, getDocs} from "firebase/firestore"; 
import { db } from "../firebase";


export const findAll = async () => {
    const doc_refs = await getDocs(collection(db, "users"));

    const res = []

    doc_refs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        })
    })

    return res;
}

