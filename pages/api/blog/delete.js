import { db, storage } from "../../../utils/firebase";
import { ref, deleteObject,listAll  } from "firebase/storage";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
    const { id } = req.query;
    try {


        // delete subCollection from blogs collection using id
        const querySnapshot = await getDocs(collection(db, 'blogs', id, 'details'));
        querySnapshot.forEach(async (docs) => {
            await deleteDoc(doc(db, 'blogs', id, 'details', docs.id));
        });

        // delete document from blogs collection using id
        await deleteDoc(doc(db, 'blogs', id));

        // delete images inside blog in storage
        const listResult = await listAll(ref(storage, `blogs/${id}`));
        listResult.items.forEach(async (imageRef) => {
            await deleteObject(imageRef);
        });


        res.status(200).json({ message: 'deleted' });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}