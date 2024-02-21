import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/components/new-work.module.scss"
import { useState } from 'react'
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../../common/routes"
import { uploadImageArray } from "../../../utils/firebase_image_upload"
import { uploadData } from "../../../utils/firebase_data_handler"
import { queryClient } from "../../_app"
function NewWork() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const placeHolder = "Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci."
    const [imageData, setImageData] = useState([
        {
            id: "image1",
            url: "/assets/admin/dummyImage.jpg"
        },
        {
            id: "image2",
            url: "/assets/admin/dummyImage.jpg"
        },
        {
            id: "image3",
            url: "/assets/admin/dummyImage.jpg"
        },
        {
            id: "image4",
            url: "/assets/admin/dummyImage.jpg"
        },
    ])

    const handleImageData = (e, id) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const newImageData = imageData.map(image => {
                if (image.id === id) {
                    return {
                        id: image.id,
                        url: reader.result
                    }
                }
                else {
                    return image
                }
            })
            setImageData(newImageData)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        const title = e.target[0].value
        const image1 = e.target[1].files[0]
        const para1 = e.target[2].value
        const para2 = e.target[3].value
        const image2 = e.target[4].files[0]
        const image3 = e.target[5].files[0]
        const image4 = e.target[6].files[0]
        const para3 = e.target[7].value
        const para4 = e.target[8].value

        const imageArray = [
            {
                id: "image1",
                file: image1
            },
            {
                id: "image2",
                file: image2
            },
            {
                id: "image3",
                file: image3
            },
            {
                id: "image4",
                file: image4
            },
        ]

        const slug = title.toLowerCase().split(" ").join("-")

        const resp = uploadImageArray(imageArray, "Our_Works_V2")
        resp.then((res) => {
            if (res.message === "success") {
                const data = {
                    title,
                    slug,
                    para1,
                    para2,
                    para3,
                    para4,
                    images: res.data
                };
                uploadData(data, "Our_Works_V2", slug).then((res) => {
                    if (res.message === "success") {
                        alert("Work Uploaded");
                        queryClient.invalidateQueries("our_works_v2");
                        setLoading(false);
                        router.push(ADMIN_ROUTES.OUR_WORKS)
                    }
                });
            } else {
                alert("Work Upload Failed");
                setLoading(false);

            }
        });

    }
    return (
        <AdminLayout>
            <div className={styles.newWork}>
                {
                    loading ? <h3>Posting the work ...</h3> :
                        <form onSubmit={handleSubmit} >
                            <input required type="text" placeholder="Title" />
                            <label htmlFor="new_work_image1">
                                <Image src={
                                    imageData.find(image => image.id === "image1").url
                                } height={1000} width={1000} alt="our work" />
                            </label>
                            <input required type="file" id="new_work_image1" onChange={(e) => {
                                handleImageData(e, "image1")
                            }} />
                            <textarea cols="30" rows="10" placeholder={placeHolder}></textarea>
                            <textarea cols="30" rows="10" placeholder={placeHolder}></textarea>
                            <div className={styles.images2} >
                                <label htmlFor="new_work_image2">
                                    <Image src={
                                        imageData.find(image => image.id === "image2").url
                                    } height={1000} width={1000} alt="our work" />
                                </label>
                                <input required type="file" id="new_work_image2" onChange={
                                    (e) => handleImageData(e, "image2")
                                } />
                                <label htmlFor="new_work_image3">
                                    <Image src={
                                        imageData.find(image => image.id === "image3").url
                                    } height={1000} width={1000} alt="our work" />
                                </label>
                                <input required type="file" id="new_work_image3" onChange={
                                    (e) => handleImageData(e, "image3")
                                } />
                            </div>
                            <label htmlFor="new_work_image4">
                                <Image src={
                                    imageData.find(image => image.id === "image4").url
                                } height={1000} width={1000} alt="our work" />
                            </label>
                            <input required type="file" id="new_work_image4" onChange={
                                (e) => handleImageData(e, "image4")
                            } />
                            <textarea cols="30" rows="10" placeholder={placeHolder}></textarea>
                            <textarea cols="30" rows="10" placeholder={placeHolder}></textarea>
                            <button type="sumbit" >Submit</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default NewWork