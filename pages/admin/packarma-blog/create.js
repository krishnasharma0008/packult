import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/blogs.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../../common/routes"
function Create() {
    const router = useRouter()
    //console.log("Blog Create Page")
    return (
        <AdminLayout>
            <div className={styles.create} >
                <h2>Choose layout</h2>
                <div className={styles.layouts} >
                    <Image onClick={() => { router.push(ADMIN_ROUTES.PACKARMA_BLOGS_LAYOUT_1) }} src="/assets/admin/Blog1.png" height={1000} width={1000} alt="layout1" />
                    <Image onClick={() => { router.push(ADMIN_ROUTES.PACKARMA_BLOGS_LAYOUT_2) }} src="/assets/admin/Blog2.png" height={1000} width={1000} alt="layout2" />
                    <Image onClick={() => { router.push(ADMIN_ROUTES.PACKARMA_BLOGS_LAYOUT_3) }} src="/assets/admin/Blog3.png" height={1000} width={1000} alt="layout3" />
                </div>
            </div>
        </AdminLayout>
    )
}

export default Create
