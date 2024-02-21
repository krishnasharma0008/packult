import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

export default async function handler(req, res) {
    // accepting data which include image
    const { title, imageUrl } = req.body;
    try {

        // create a document reference
        const docRef = doc(collection(db, "careers_images"));

        // update the document with the download url
        await setDoc(docRef, {
            image: imageUrl,
            title: title,
        }, { merge: true });


        // get the document from the database and pass it to the client
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