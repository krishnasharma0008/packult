import Image from 'next/image'
import { useState } from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from '../../../styles/admin/components/layouts.module.scss'
import { useRouter } from 'next/router'
import { uploadImageArray } from '../../../utils/firebase_image_upload'
import { uploadData } from '../../../utils/firebase_data_handler'
import { queryClient } from '../../_app'
import { ADMIN_ROUTES } from '../../../common/routes';

function Index() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const placeHolder = "Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci."
    const [imageData, setImageData] = useState([{
        id: "image1",
        url: "/assets/admin/dummyImage.jpg"
    }])

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

        const imageArray = [{
            id: "image1",
            file: image1
        }]

        const slug = title.toLowerCase().split(" ").join("-")
        const layout = "layout3"

        const resp = uploadImageArray(imageArray, "packarma_blog")
        resp.then((res) => {
            if (res.message === "success") {
                const data = {
                    title,
                    slug,
                    date,
                    para1,
                    para2,
                    layout,
                    images: res.data
                };
                uploadData(data, "packarma_blog", slug).then((res) => {
                    if (res.message === "success") {
                        alert("Blog Uploaded");
                        queryClient.invalidateQueries("packarma_blog");
                        setLoading(false);
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS)
                    }
                });
            } else {
                alert("BLog Upload Failed");
                setLoading(false);

            }
        });

    }
    return (
        <AdminLayout>
            <div className={styles.layout3} >
                {
                    loading ? <h3>Posting the blog ...</h3> :
                        <form onSubmit={handleSubmit}>
                            <div className={styles.head}>
                                <label htmlFor="layout3_image1">
                                    <Image src={
                                        imageData.find(image => image.id === "image1").url
                                    } name="image1" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input onChange={(e) => {
                                    handleImageData(e, "image1")
                                }} required type="file" id="layout3_image1" />
                                <div className={styles.title} >
                                    <input required type="text" placeholder='Title' />
                                    <input required type="date" />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <textarea placeholder={placeHolder} cols="30" rows="10"></textarea>
                                <textarea placeholder={placeHolder} cols="30" rows="10"></textarea>
                            </div>
                            <button type='submit'>Post</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}
export default Index