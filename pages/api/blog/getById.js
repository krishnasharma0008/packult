import { db } from '../../../utils/firebase';
import { collection, getDocs } from "firebase/firestore";


export default async function handler(req, res) {
    const { id } = req.query;
    // get details collection  from blogs document using id
    const querySnapshot = await getDocs(collection(db, 'blogs', id, 'details'));
    const post = [];
    querySnapshot.forEach((doc) => {
        post.push({ ...doc.data(), id: doc.id });
    });

    res.status(200).json(post[0]);
}


