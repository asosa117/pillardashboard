import { collection, getDocs} from "firebase/firestore"; 
import { db } from "../src/firebase";


export const findAll = async () => {
    const doc_refs = await getDocs(collection(db, "users"));

    const res = []

    doc_refs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        })
    })

    console.log(res);
    return res;
    
}

export const findAllMeds = async () => {
    const doc_refs = await getDocs(collection(db, "users", "8CeDIHfXt3dT4FsNZkshUZnq4sI2", "medicationTimes"));

    const res = []

    doc_refs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        })
    })

    console.log(res);
    return res;
    
}