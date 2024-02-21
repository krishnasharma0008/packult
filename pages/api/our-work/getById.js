import { db } from '../../../utils/firebase';
import {  doc, getDoc } from "firebase/firestore";

export default async function handler(req, res) {
    try {
        const { id } = req.query;        
        const docRef = doc(db, "our-works", id);
        const docSnap = await getDoc(docRef);
        const post = [];
        post.push({ ...docSnap.data(), id: docSnap.id });

        res.status(200).json(post[0]);
    } catch (error) {
        res.status(500).json({ error: error });

    }
}