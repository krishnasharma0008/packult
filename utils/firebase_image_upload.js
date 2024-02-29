import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase'

export async function uploadImage(image, path) {

    try {
        // create a storage reference
        const storageRef = ref(storage, `${path}/${image.name + new Date().getTime()}`);

        // upload the file
        const uploadTask = await uploadBytesResumable(storageRef, image);

        // get the download url
        const downloadURL = await getDownloadURL(uploadTask.ref);

        // detele using url
        // const imageRef = ref(storage, downloadURL);
        // await deleteObject(imageRef);
        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}

export async function uploadImages(images, path) {

    try {


        var downloadURL = [];
        for (const key in images) {
            if (key == "item" || key == "length") continue;
            const image = images[key];
            const imageRef = ref(storage, `${path}/${image.name + new Date().getTime()}`);
            const uploadTask = await uploadBytesResumable(imageRef, image);
            // get the download url
            const url = await getDownloadURL(uploadTask.ref);
            downloadURL.push(url);
        }


        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}


export async function deleteImage(path) {
    try {
        // detele using url
        const imageRef = ref(storage, path);
        await deleteObject(imageRef);
        return { message: "success" }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}

export async function uploadImageArray(imageArray, path) {


    try {
        var downloadURL = [];
        for (const key in imageArray) {
            if (key == "item" || key == "length") continue;
            const image = imageArray[key];
            const imageRef = ref(storage, `${path}/${image.file.name + new Date().getTime()}`);
            const uploadTask = await uploadBytesResumable(imageRef, image.file);
            // get the download url
            const url = await getDownloadURL(uploadTask.ref);
            downloadURL.push({ id: image.id, url: url });
        }
        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }

    }

}


export async function deleteImageArray(imageArray) {
    try {
        for (const key in imageArray) {
            if (key == "item" || key == "length") continue;
            const image = imageArray[key];
            const imageRef = ref(storage, image.url);
            await deleteObject(imageRef);
        }
        return { message: "success" }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }

    }

}

export async function updateImageArray(oldImagesArray, newImageArray, path) {
    console.log("oldImagesArray: ", oldImagesArray);
    console.log("newImageArray: ", newImageArray);
    try {
        var downloadURL = [];
        for (const key in newImageArray) {
            if (key == "item" || key == "length") continue;
            const image = newImageArray[key];
            console.log("image: ", image);
            const imageRef = ref(storage, `${path}/${image.file.name + new Date().getTime()}`);
            const uploadTask = await uploadBytesResumable(imageRef, image.file);
            // get the download url
            const url = await getDownloadURL(uploadTask.ref);
            downloadURL.push({ id: image.id, url: url });
        }
        // delete the old images by id
        oldImagesArray.forEach(element => {
            downloadURL.forEach(newElement => {
                if (element.id == newElement.id) {
                    const imageRef = ref(storage, element.url);
                    deleteObject(imageRef);
                    // remove the old images from the oldImagesArray
                    oldImagesArray = oldImagesArray.filter((item) => item.id !== element.id);
                }
            });
        });


        const response = [...oldImagesArray, ...downloadURL];

        console.log("response: ", response);

        return { message: "success", data: response }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }

    }
}

