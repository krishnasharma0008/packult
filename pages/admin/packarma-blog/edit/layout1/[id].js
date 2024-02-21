import Image from "next/image"
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { useState } from "react"
import { ADMIN_ROUTES } from "../../../../../common/routes"
import { updateImageArray } from "../../../../../utils/firebase_image_upload"
import { deleteDataById, getDataById, uploadData } from "../../../../../utils/firebase_data_handler"
import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../../../../_app"
function Layout1Edit() {

    const router = useRouter()
    const params = router.query
    console.log(params);
    const [updating, setUpdating] = useState(false)
    const [loading, setLoading] = useState(false)
    const [imageData, setImageData] = useState([
        {
            id: "image1",
            url: ""
        },
        {
            id: "image2",
            url: ""
        },
        {
            id: "image3",
            url: ""
        },
        {
            id: "image4",
            url: ""
        }

    ])
    const placeHolder = "Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci."
    const blogData = useQuery(
        ["packarma_blog", params.id],
        () => {
            return getDataById(`packarma_blog/${params.id}`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!params.id
        }
    )

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
            { id: 'image4', file: image4 }
        ]
        var newImageArray = []

        imageArray.forEach(element => {
            // check if image is file or undefined
            if (element.file !== undefined) {
                newImageArray.push(element)
            }
        });
        const oldImageArray = blogData.data?.data.images

        const slug = title.toLowerCase().split(" ").join("-")
        const layout = "layout1"

        const resp = updateImageArray(oldImageArray, newImageArray, "packarma_blog")
        resp.then((res) => {
            const data = {
                title: title,
                date: date,
                para1: para1,
                para2: para2,
                para3: para3,
                para4: para4,
                para5: para5,
                para6: para6,
                para7: para7,
                para8: para8,
                para9: para9,
                para10: para10,
                slug: slug,
                layout: layout,
                images: res.data
            }

            uploadData(data, "packarma_blog", slug).then((res) => {
                if (res.message === "success") {

                    alert("Blog Updated");
                    // delte previos document
                    if (blogData.data?.data.slug !== slug)
                        deleteDataById(`packarma_blog/${params.id}`)
                    queryClient.invalidateQueries("packarma_blog");
                    setLoading(false);
                    router.push(ADMIN_ROUTES.PACKARMA_BLOGS)
                }
                else {
                    alert("Something went wrong");
                    setLoading(false);
                }
            })

        })
    }
    return (
        <AdminLayout>
            <div className={styles.layout1} >
                {
                    loading ? <h3>Loading...</h3> : updating ? <h3>Updating...</h3> : <form onSubmit={handleSubmit}>
                        <label htmlFor="image1">
                            <Image src={
                                imageData.find((image) => image.id === "image1").url ||
                                blogData?.data?.data.images.find((image) => image.id === "image1").url
                            } name="image1" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="image1" onChange={
                            (e) => handleImageData(e, "image1")
                        } />
                        <div className={styles.head}>
                            <input id="title" defaultValue={blogData?.data?.data.title} name="title" type="text" />
                            <input id="date" defaultValue={blogData?.data?.data.date} name="date" type="date" />
                        </div>
                        <div className={styles.content} >
                            <textarea defaultValue={blogData?.data?.data.para1} name="para1" id="para1" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para2} name="para2" id="para2" cols="30" rows="10"></textarea>
                            <div className={styles.image2} >

                                <label htmlFor="image2">
                                    <Image src={
                                        imageData.find((image) => image.id === "image2").url ||
                                        blogData?.data?.data.images.find((image) => image.id === "image2").url
                                    } name="image2" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <label htmlFor="image3">
                                    <Image src={
                                        imageData.find((image) => image.id === "image3").url ||
                                        blogData?.data?.data.images.find((image) => image.id === "image3").url
                                    } name="image3" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input type="file" id="image2" onChange={
                                    (e) => handleImageData(e, "image2")
                                } />
                                <input type="file" id="image3" onChange={
                                    (e) => handleImageData(e, "image3")
                                } />
                            </div>

                            <textarea defaultValue={blogData?.data?.data.para3} name="para3" id="para3" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para4} name="para4" id="para4" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para5} name="para5" id="para5" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para6} name="para6" id="para6" cols="30" rows="10"></textarea>

                            <label htmlFor="image4">
                                <Image src={
                                    imageData.find((image) => image.id === "image4").url ||
                                    blogData?.data?.data.images.find((image) => image.id === "image4").url
                                } name="image4" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input type="file" id="image4" onChange={
                                (e) => handleImageData(e, "image4")
                            } />

                            <textarea defaultValue={blogData?.data?.data.para7} name="para7" id="para7" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para8} name="para8" id="para8" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para9} name="para9" id="para9" cols="30" rows="10"></textarea>
                            <textarea defaultValue={blogData?.data?.data.para10} name="para10" id="para10" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit">Update</button>
                    </form>
                }

            </div>
        </AdminLayout>
    )
}

export default Layout1Edit