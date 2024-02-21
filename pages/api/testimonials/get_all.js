import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default async function handler(req, res) {

    try{
        // const q = query(collection(db, "cities")
        const q = query(collection(db, "testimonials"));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({
                id: doc.id,
                ...doc.data()
            });
        });
        res.status(200).json({ message: 'success', data: data })

    }
    catch (error) {
        res.status(500).json({ message: 'error' })
    }
}