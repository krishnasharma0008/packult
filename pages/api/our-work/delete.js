import { db, storage } from "../../../utils/firebase";
import { ref, deleteObject, listAll } from "firebase/storage";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
    const { id } = req.query;
    try {
        // delete document from ourWork collection using id
        await deleteDoc(doc(db, 'our-works', id));

        // delete images inside ourWork in storage
        const listResult = await listAll(ref(storage, `our-works/${id}`));
        listResult.items.forEach(async (imageRef) => {
            await deleteObject(imageRef);
        });

        res.status(200).json({ message: 'deleted' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
