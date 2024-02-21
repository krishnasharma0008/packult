import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";


export async function uploadData(data, path, id = null) {
  try {
    console.log(data, path, id);
    if (id) {
      await setDoc(doc(db, path, id), data, { merge: true });
      const docSnap = await getDoc(doc(db, path, id));
      if (docSnap.exists()) {
        return {
          message: "success",
          data: {
            id: docSnap.id,
            ...docSnap.data()
          }
        };
      } else {
        return {
          message: "error",
          data: "No such document!"
        };
      }

    } else {

      // doc ref
      const docRef = doc(collection(db, path));

      // add data to docRef
      await setDoc(docRef, data, { merge: true });

      // get the document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          message: "success",
          data: {
            id: docSnap.id,
            ...docSnap.data(),
          },
        };
      } else {
        return {
          message: "error",
          data: "No such document!",
        };
      }
    }
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      data: err,
    };
  }

}

export async function getAllData(path) {
  try {
    const querySnapshot = await getDocs(collection(db, path));
    let data = [];
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return {
      message: "success",
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      data: err,
    };
  }
}

export async function getDataById(path) {
  try {
    const docRef = doc(db, path);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        message: "success",
        data: {
          id: docSnap.id,
          ...docSnap.data(),
        },
      };
    } else {
      return {
        message: "error",
        data: "No such document!",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      data: err,
    };
  }
}

export async function updateDataById(data, path) {
  try {
    const docRef = doc(db, path);
    await setDoc(docRef, data, { merge: true });
    return {
      message: "success",
      data: "Document successfully updated!",
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      data: err,
    };
  }
}

export async function deleteDataById(path) {
  try {
    const docRef = doc(db, path);
    await deleteDoc(docRef);
    return {
      message: "success",
      data: "Document successfully deleted!",
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      data: err,
    };
  }
}
