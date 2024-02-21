import { db } from '../../../utils/firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
    const { name, email, number, message } = req.body;
    try {
        //    setdocumnet
        const docRef = doc(db, "contact", email);
        await setDoc(docRef, {
            name: name,
            email: email,
            number: number,
            message: message
        }, { merge: true });

        // // get the document from the database
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: 'error' })
    }
}