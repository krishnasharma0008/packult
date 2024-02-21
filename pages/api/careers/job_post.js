import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default async function handler(req, res) {

    const { title, work_type, work_time } = req.body;

    try {

        const docRef = doc(collection(db, "careers"));
        await setDoc(docRef, {
            title: title,
            work_type: work_type,
            work_time: work_time
        }, { merge: true });
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res.status(200).json({ message: 'success', data: docSnap.data() })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: 'error' })
    }
}