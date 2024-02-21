import Image from "next/image"
import styles from "../../styles/admin/components/ourWorkCard.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES, ROUTES } from "../../common/routes"
import { deleteImageArray } from "../../utils/firebase_image_upload"
import { deleteDataById } from "../../utils/firebase_data_handler"
import { queryClient } from "../../pages/_app"

function OorWorkCard({ data }) {
    const router = useRouter()
    return (
        <div className={styles.ourWork_card} onClick={() => {
            router.push(ROUTES.OUR_WORKS + data.id)
        }} >
            <h4>{data.title}</h4>
            <Image src={data.images.find(image => image.id === "image1").url} height={1000} width={1000} alt="our work" />
            <div className={styles.footer} >
                <button onClick={(e) => {
                    e.stopPropagation();
                    router.push(ADMIN_ROUTES.OUR_WORKS_EDIT + data.id)
                }} >Edit</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    deleteImageArray(data.images).then(res => {
                        if (res.message === "success") {
                            deleteDataById(`Our_Works_V2/${data.id}`).then(res => {
                                if (res.message === "success") {
                                    queryClient.invalidateQueries("our_works_v2");
                                }
                            })
                        }
                    })
                }}>Delete</button>
            </div>
        </div>
    )
}

export default OorWorkCard