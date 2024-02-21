import Image from "next/image"
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { useState } from "react"
import { ADMIN_ROUTES } from "../../../../../common/routes"
import { useQuery } from "@tanstack/react-query"
import { deleteDataById, getDataById, updateDataById, uploadData } from "../../../../../utils/firebase_data_handler"
import { updateImageArray } from "../../../../../utils/firebase_image_upload"
import { queryClient } from "../../../../_app"
function Layout3Edit() {

    const router = useRouter()
    const params = router.query
    const [updating, setUpdating] = useState(false)
    const [loading, setLoading] = useState(false)
    const [imageData, setImageData] = useState([{
        id: "image1",
        url: ""
    }])
    const placeHolder = "Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci."
    const blogData = useQuery(
        ["blogs_v2", params.id],
        () => {
            return getDataById(`Blogs_V2/${params.id}`)
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

        const image1 = e.target[0].files[0]
        const title = e.target[1].value
        const date = e.target[2].value
        const para1 = e.target[3].value
        const para2 = e.target[4].value
        const imageArray = [
            {
                id: "image1",
                file: image1
            }
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
        const layout = "layout3"

        const resp = updateImageArray(oldImageArray, newImageArray, "Blogs_V2")
        resp.then((res) => {
            const data = {
                title: title,
                date: date,
                para1: para1,
                para2: para2,
                slug: slug,
                layout: layout,
                images: res.data
            }

            uploadData(data, "Blogs_V2", slug).then((res) => {
                if (res.message === "success") {
                    alert("Blog Updated");
                    // delte previos document
                    if (blogData.data?.data.slug !== slug)
                        deleteDataById(`Blogs_V2/${params.id}`)
                    queryClient.invalidateQueries("blogs_v2");
                    setLoading(false);
                    router.push(ADMIN_ROUTES.BLOGS)
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
            <div className={styles.layout3} >
                {
                    loading ? <h3>Loading...</h3> : blogData.isLoading ? <h3>Loading...</h3> : updating ? <h3>Updating...</h3> :
                        <form onSubmit={handleSubmit} >
                            <div className={styles.head}>
                                <label htmlFor="layout3_image1">
                                    <Image src={
                                        imageData.find((image) => image.id === "image1").url ||
                                        blogData?.data?.data.images.find((image) => image.id === "image1").url
                                    } name="image1" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input onChange={
                                    (e) => handleImageData(e, "image1")
                                } type="file" id="layout3_image1" />
                                <div className={styles.title} >
                                    <input defaultValue={
                                        blogData?.data?.data.title
                                    } type="text" placeholder='Title' />
                                    <input defaultValue={
                                        blogData?.data?.data.date
                                    } type="date" />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <textarea defaultValue={
                                    blogData?.data?.data.para1
                                } placeholder={placeHolder} cols="30" rows="10"></textarea>
                                <textarea defaultValue={
                                    blogData?.data?.data.para2
                                } placeholder={placeHolder} cols="30" rows="10"></textarea>
                            </div>
                            <button type='submit'>Update</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default Layout3Edit
