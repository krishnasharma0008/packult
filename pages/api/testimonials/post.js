import { db } from '../../../utils/firebase'
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
    const { content, name, title } = req.body;

    try {

        const docRef = doc(collection(db, "testimonials"));
        await setDoc(docRef, {
            content: content,
            name: name,
            title: title
        }, { merge: true });

        // get the document from the database and pass it to the client
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res.status(200).json({ message: 'success', data: { id: docSnap.id, ...docSnap.data() } })
        }
        else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            res.status(500).json({ message: 'error' })
        }

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: 'error' })
    }
}