import Image from "next/image"
import styles from "../../styles/admin/components/blogCard.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES, ROUTES } from "../../common/routes"
import { deleteImageArray } from "../../utils/firebase_image_upload"
import { deleteDataById } from "../../utils/firebase_data_handler"
import { queryClient } from "../../pages/_app"

function Packarma_BlogCard({ img, title, description, id, layout, images }) {

    const router = useRouter()
    return (
        <div className={styles.blog_card} onClick={() => {
            router.push(ROUTES.BLOG + id)
        }} >
            <Image src={img} height={1000} width={1000} alt={title} />
            <h4>{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <div className={styles.footer} >
                <button onClick={(e) => {
                    e.stopPropagation();
                    if (layout === "layout1")
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS_EDIT_LAYOUT_1 + id)
                    else if (layout === "layout2")
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS_EDIT_LAYOUT_2 + id)
                    else
                        router.push(ADMIN_ROUTES.PACKARMA_BLOGS_EDIT_LAYOUT_3 + id)

                }}
                >Edit</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    deleteImageArray(images).then(res => {
                        if (res.message === "success") {
                            deleteDataById(`packarma_blog/${id}`).then(res => {
                                if (res.message === "success") {
                                    queryClient.invalidateQueries("packarma_blog");
                                }
                            })
                        }
                    })
                }} >Delete</button>
            </div>
        </div>
    )
}

export default Packarma_BlogCard