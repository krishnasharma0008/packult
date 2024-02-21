import Image from "next/image"
import styles from "../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../common/routes"

function ContentLayout1({ data, isAdmin }) {
    const router = useRouter()
    const params = router.query
    return (
        <div className={styles.content_layout_1} >
            {
                isAdmin ? (
                    <div className={styles.admin_options} >
                        <button onClick={() => {
                            router.push(ADMIN_ROUTES.BLOGS_EDIT_LAYOUT_1 + params.id)
                        }} >Edit</button>
                        <button onClick={() => {
                            // delete api with id as params
                            fetch(`/api/blog/delete?id=${params.id}`)

                                .then(res => res.json())
                                .then(data => {
                                    router.push(ADMIN_ROUTES.BLOGS)
                                })
                        }} >Delete</button>
                        <hr />
                    </div>
                ) : null
            }
            <Image className={styles.image1} src={data.image1} height={1000} width={1000} alt={data.title} />
            <div className={styles.head}>
                <h1>{data.title}</h1>
                <p>{data.date}</p>
            </div>
            <div className={styles.content} >
                <p>{data.para1}</p>
                <p>{data.para2}</p>
                <div className={styles.image2} >
                    <Image src={data.image2} height={1000} width={1000} alt={data.title} />
                    <Image src={data.image3} height={1000} width={1000} alt={data.title} />
                </div>
                <p>{data.para3}</p>
                <p>{data.para4}</p>
                <p>{data.para5}</p>
                <p>{data.para6}</p>
                <Image className={styles.image3} src={data.image4} height={1000} width={1000} alt={data.title} />
                <p>{data.para7}</p>
                <p>{data.para8}</p>
                <p>{data.para9}</p>
                <p>{data.para10}</p>
            </div>

        </div>
    )
}

export default ContentLayout1