import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/components/layouts.module.scss"
import { useState } from "react"
import { db, storage } from "../../../utils/firebase.js"
import { collection, doc, setDoc } from "firebase/firestore"
import { uploadBytes, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { ADMIN_ROUTES } from "../../../common/routes"
import { useRouter } from "next/router"
import { uploadImageArray } from "../../../utils/firebase_image_upload"
import { uploadData } from "../../../utils/firebase_data_handler"
import { queryClient } from "../../_app"

// function Index() {

//     const [loading, setloading] = useState(false)
//     const router = useRouter()
//     const [image1Url, setImage1Url] = useState("/assets/admin/dummyImage.jpg")
//     const [image2Url, setImage2Url] = useState("/assets/admin/dummyImage.jpg")
//     const [image3Url, setImage3Url] = useState("/assets/admin/dummyImage.jpg")
//     const [image4Url, setImage4Url] = useState("/assets/admin/dummyImage.jpg")

//     const [image1, setImage1] = useState("")
//     const [image2, setImage2] = useState("")
//     const [image3, setImage3] = useState("")
//     const [image4, setImage4] = useState("")

//     const [title, setTitle] = useState("")
//     const [date, setDate] = useState("")

//     const [para1, setPara1] = useState("")
//     const [para2, setPara2] = useState("")
//     const [para3, setPara3] = useState("")
//     const [para4, setPara4] = useState("")
//     const [para5, setPara5] = useState("")
//     const [para6, setPara6] = useState("")
//     const [para7, setPara7] = useState("")
//     const [para8, setPara8] = useState("")
//     const [para9, setPara9] = useState("")
//     const [para10, setPara10] = useState("")

//     const handleImage1 = (e) => {
//         if (e.target.files[0]) {
//             setImage1(e.target.files[0])
//             setImage1Url(URL.createObjectURL(e.target.files[0]))
//         }
//     }

//     const handleImage2 = (e) => {
//         if (e.target.files[0]) {
//             setImage2(e.target.files[0])
//             setImage2Url(URL.createObjectURL(e.target.files[0]))
//         }
//     }

//     const handleImage3 = (e) => {
//         if (e.target.files[0]) {
//             setImage3(e.target.files[0])
//             setImage3Url(URL.createObjectURL(e.target.files[0]))
//         }
//     }

//     const handleImage4 = (e) => {
//         if (e.target.files[0]) {
//             setImage4(e.target.files[0])
//             setImage4Url(URL.createObjectURL(e.target.files[0]))
//         }
//     }

//     async function handleSubmit(e) {
//         e.preventDefault()
//         setloading(true)
//         // check for empty fields with images
//         if (image1 === "" || image2 === "" || image3 === "" || image4 === "" || title === "" || date === "" || para1 === "" || para2 === "" || para3 === "" || para4 === "" || para5 === "" || para6 === "" || para7 === "" || para8 === "" || para9 === "" || para10 === "") {
//             alert("Please fill all the fields")
//             setloading(false)
//             return
//         }

//         // slug = title with _ instead of spacesand all lowercase
//         const slug = title.replace(/\s+/g, '-').toLowerCase()

//         // create a ref to firestore
//         const blogRef = doc(collection(db, "blogs"), slug);

//         var downloadUrl1 = ""
//         var downloadUrl2 = ""
//         var downloadUrl3 = ""
//         var downloadUrl4 = ""

//         // upload images to storage using the ref
//         uploadBytes(ref(storage, `blogs/${blogRef.id}/image1`), image1).then((snapshot) => {
//             getDownloadURL(ref(storage, `blogs/${blogRef.id}/image1`)).then((url) => {
//                 downloadUrl1 = url
//             }).then(() => {
//                 uploadBytes(ref(storage, `blogs/${blogRef.id}/image2`), image2).then((snapshot) => {
//                     getDownloadURL(ref(storage, `blogs/${blogRef.id}/image2`)).then((url) => {
//                         downloadUrl2 = url
//                     }).then(() => {
//                         uploadBytes(ref(storage, `blogs/${blogRef.id}/image3`), image3).then((snapshot) => {
//                             getDownloadURL(ref(storage, `blogs/${blogRef.id}/image3`)).then((url) => {
//                                 downloadUrl3 = url
//                             }
//                             ).then(() => {
//                                 uploadBytes(ref(storage, `blogs/${blogRef.id}/image4`), image4).then((snapshot) => {
//                                     getDownloadURL(ref(storage, `blogs/${blogRef.id}/image4`)).then((url) => {
//                                         downloadUrl4 = url
//                                     }
//                                     ).then(() => {
//                                         // create a blog object
//                                         const blogDetails = {
//                                             title: title,
//                                             date: date,
//                                             image1: downloadUrl1,
//                                             image2: downloadUrl2,
//                                             image3: downloadUrl3,
//                                             image4: downloadUrl4,
//                                             para1: para1,
//                                             para2: para2,
//                                             para3: para3,
//                                             para4: para4,
//                                             para5: para5,
//                                             para6: para6,
//                                             para7: para7,
//                                             para8: para8,
//                                             para9: para9,
//                                             para10: para10,
//                                             layout: "layout1"

//                                         }
//                                         // split the words by 30
//                                         const para1Words = para1.split(" ")
//                                         const para1Words30 = para1Words.slice(0, 30)
//                                         const para1Words30String = para1Words30.join(" ")
//                                         const para1Words30StringWithDots = para1Words30String + "..."

//                                         // create a blog with only title, date, mainImage, desc  and layout, and rest should be inside a details collection
//                                         const blog = {
//                                             title: title,
//                                             date: date,
//                                             mainImage: downloadUrl1,
//                                             description: para1Words30StringWithDots,
//                                             layout: "layout1"
//                                         }

//                                         // add the blog to firestore
//                                         setDoc(blogRef, blog)
//                                             .then(() => {
//                                                 // add the blog details to the details collection
//                                                 const blogDetailsRef = doc(collection(db, "blogs", blogRef.id, "details"))
//                                                 setDoc(blogDetailsRef, blogDetails, { merge: true })
//                                                     .then(() => {
//                                                         alert("Blog added successfully")
//                                                         setloading(false)
//                                                         // reset the form
//                                                         setTitle("")
//                                                         setDate("")
//                                                         setImage1("")
//                                                         setImage2("")
//                                                         setImage3("")
//                                                         setImage4("")
//                                                         setPara1("")
//                                                         setPara2("")
//                                                         setPara3("")
//                                                         setPara4("")
//                                                         setPara5("")
//                                                         setPara6("")
//                                                         setPara7("")
//                                                         setPara8("")
//                                                         setPara9("")
//                                                         setPara10("")
//                                                         setImage1Url("/assets/admin/dummyImage.jpg")
//                                                         setImage2Url("/assets/admin/dummyImage.jpg")
//                                                         setImage3Url("/assets/admin/dummyImage.jpg")
//                                                         setImage4Url("/assets/admin/dummyImage.jpg")

//                                                         // navigate back to blogs
//                                                         router.push(ADMIN_ROUTES.BLOGS)
//                                                     })
//                                                     .catch((error) => {
//                                                         alert("Error adding blog")
//                                                         console.log(error)
//                                                         // delete the images from storage
//                                                         deleteObject(ref(storage, `blogs/${blogRef.id}/image1`))
//                                                         deleteObject(ref(storage, `blogs/${blogRef.id}/image2`))
//                                                         deleteObject(ref(storage, `blogs/${blogRef.id}/image3`))
//                                                         deleteObject(ref(storage, `blogs/${blogRef.id}/image4`))

//                                                         setloading(false)
//                                                     })
//                                             })
//                                             .catch((error) => {
//                                                 alert("Error adding blog")
//                                                 console.log(error)
//                                                 setloading(false)
//                                                 // delete the images from storage
//                                                 deleteObject(ref(storage, `blogs/${blogRef.id}/image1`))
//                                                 deleteObject(ref(storage, `blogs/${blogRef.id}/image2`))
//                                                 deleteObject(ref(storage, `blogs/${blogRef.id}/image3`))
//                                                 deleteObject(ref(storage, `blogs/${blogRef.id}/image4`))
//                                             })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//         return


//     }

//     return (
//         <AdminLayout>
//             <div className={styles.layout1} >
//                 {
//                     loading ? <h3>Posting the blog ...</h3> : (
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="image1">
//                                 <Image src={image1Url} id="layout1_image1" name="image1" height={1000} width={1000} alt="dummyImage" />
//                             </label>
//                             <input type="file" id="image1" onChange={handleImage1} />
//                             <div className={styles.head}>

//                                 <input id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title of the Blog" />
//                                 <input id="date" name="date" onChange={(e) => setDate(e.target.value)} type="date" />
//                             </div>
//                             <div className={styles.content} >
//                                 <textarea onChange={(e) => setPara1(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para1" id="para1" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara2(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para2" id="para2" cols="30" rows="10"></textarea>
//                                 <div className={styles.image2} >


//                                     <label htmlFor="image2">
//                                         <Image src={image2Url} name="image2" height={1000} width={1000} alt="dummyImage" />
//                                     </label>
//                                     <label htmlFor="image3">
//                                         <Image src={image3Url} name="image3" height={1000} width={1000} alt="dummyImage" />
//                                     </label>
//                                     <input type="file" id="image2" onChange={handleImage2} />
//                                     <input type="file" id="image3" onChange={handleImage3} />
//                                 </div>

//                                 <textarea onChange={(e) => setPara3(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para3" id="para3" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara4(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para4" id="para4" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara5(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para5" id="para5" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara6(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para6" id="para6" cols="30" rows="10"></textarea>

//                                 <label htmlFor="image4">
//                                     <Image src={image4Url} name="image4" height={1000} width={1000} alt="dummyImage" />
//                                 </label>
//                                 <input type="file" id="image4" onChange={handleImage4} />

//                                 <textarea onChange={(e) => setPara7(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para7" id="para7" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara8(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para8" id="para8" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara9(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para9" id="para9" cols="30" rows="10"></textarea>
//                                 <textarea onChange={(e) => setPara10(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para10" id="para10" cols="30" rows="10"></textarea>
//                             </div>
//                             <button type="submit">Post</button>
//                         </form>
//                     )
//                 }

//             </div>
//         </AdminLayout>
//     )
// }

function Index() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const placeHolder = 'Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.';

    const [imageData, setImageData] = useState([
        {
            id: 'image1',
            url: '/assets/admin/dummyImage.jpg',
        },
        {
            id: 'image2',
            url: '/assets/admin/dummyImage.jpg',
        },
        {
            id: 'image3',
            url: '/assets/admin/dummyImage.jpg',
        },
        {
            id: 'image4',
            url: '/assets/admin/dummyImage.jpg',
        },
    ]);

    const handleImageData = (e, id) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const newImageData = imageData.map((image) =>
                image.id === id
                    ? {
                        id: image.id,
                        url: reader.result,
                    }
                    : image
            );
            setImageData(newImageData);
        };
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const image1 = e.target[0].files[0];
        const title = e.target[1].value;
        const date = e.target[2].value;
        const para1 = e.target[3].value;
        const para2 = e.target[4].value;
        const image2 = e.target[5].files[0];
        const image3 = e.target[6].files[0];
        const para3 = e.target[7].value;
        const para4 = e.target[8].value;
        const para5 = e.target[9].value;
        const para6 = e.target[10].value;
        const image4 = e.target[11].files[0];
        const para7 = e.target[12].value;
        const para8 = e.target[13].value;
        const para9 = e.target[14].value;
        const para10 = e.target[15].value;

        const imageArray = [
            { id: 'image1', file: image1 },
            { id: 'image2', file: image2 },
            { id: 'image3', file: image3 },
            { id: 'image4', file: image4 },
        ];

        const slug = title.toLowerCase().split(' ').join('-');
        const layout = 'layout3';

        const resp = uploadImageArray(imageArray, 'packarma_blog');
        resp.then((res) => {
            if (res.message === 'success') {
                const data = {
                    title,
                    slug,
                    date,
                    para1,
                    para2,
                    para3,
                    para4,
                    para5,
                    para6,
                    para7,
                    para8,
                    para9,
                    para10,
                    layout,
                    images: res.data,
                };
                uploadData(data, 'packarma_blog', slug).then((res) => {
                    if (res.message === 'success') {
                        alert('Blog Updated');
                        queryClient.invalidateQueries('packarma_blog');
                        setLoading(false);
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS);
                    }
                });
            } else {
                alert('Blog Upload Failed');
                setLoading(false);
            }
        });
    }

    return (
        <AdminLayout>
            <div className={styles.layout1} >
                {
                    loading ? <h3>Posting the blog ...</h3> : (
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="image1">
                                <Image src={
                                    imageData.find((image) => image.id === 'image1').url
                                } id="layout1_image1" name="image1" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input required onChange={
                                (e) => handleImageData(e, 'image1')
                            } type="file" id="image1" />
                            <div className={styles.head}>

                                <input required id="title" name="title" type="text" placeholder="Title of the Blog" />
                                <input required id="date" name="date" type="date" />
                            </div>
                            <div className={styles.content} >
                                <textarea placeholder={placeHolder} name="para1" id="para1" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para2" id="para2" cols="30" rows="10"></textarea>
                                <div className={styles.image2} >


                                    <label htmlFor="image2">
                                        <Image src={
                                            imageData.find((image) => image.id === 'image2').url
                                        } name="image2" height={1000} width={1000} alt="dummyImage" />
                                    </label>
                                    <label htmlFor="image3">
                                        <Image src={
                                            imageData.find((image) => image.id === 'image3').url
                                        } name="image3" height={1000} width={1000} alt="dummyImage" />
                                    </label>
                                    <input required onChange={
                                        (e) => handleImageData(e, 'image2')
                                    } type="file" id="image2" />
                                    <input required onChange={
                                        (e) => handleImageData(e, 'image3')
                                    } type="file" id="image3" />
                                </div>

                                <textarea placeholder={placeHolder} name="para3" id="para3" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para4" id="para4" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para5" id="para5" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para6" id="para6" cols="30" rows="10"></textarea>

                                <label htmlFor="image4">
                                    <Image src={
                                        imageData.find((image) => image.id === 'image4').url
                                    } name="image4" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input required onChange={
                                    (e) => handleImageData(e, 'image4')
                                } type="file" id="image4" />

                                <textarea placeholder={placeHolder} name="para7" id="para7" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para8" id="para8" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para9" id="para9" cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} name="para10" id="para10" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit">Post</button>
                        </form>
                    )
                }

            </div>
        </AdminLayout>
    )
}

export default Index