import styles from "../../styles/work-page.module.scss"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../../components/layout"
import { ROUTES } from "../../common/routes"
import WorkNumbers from "../../components/workNumbers"
import Contact from "../../components/contact"
import { useQuery } from "@tanstack/react-query"
import { getDataById } from "../../utils/firebase_data_handler"

function WorkPage() {
    const router = useRouter()
    const params = router.query

    const [loading, setloading] = useState(true)
    const [data, setdata] = useState({})

    const ourWorkData = useQuery(
        ["our_works_v2", params.id],
        () => {
            return getDataById(`Our_Works_V2/${params.id}`)
        },
        {
            staleTime: 10000 * 60,
            enabled: !!params.id
        }
    )

    const ourWorkDataRelated = useQuery(
        ["our_works_v2"],
        () => {
            return getAllData(`Our_Works_V2`)
        },
        {
            staleTime: 10000 * 60,
        }
    )
    useEffect(() => {
        // fetch data using api
        fetch(`/api/our-work/getById?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setloading(false)
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [params.id])
    const [images, setimages] = useState([])

    useEffect(() => {
        //   fetch blog images using api
        fetch('/api/our-work/get')
            .then(res => res.json())
            .then(images => {
                // reverse the array to get latest blog first
                images.reverse()
                setimages(images)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(ourWorkData);
    return (
        <div>
            {
                ourWorkData.isLoading ? <h1>Loading...</h1> :
                    <Layout>
                        <div className={styles.work_page}>
                            <h3>{ourWorkData?.data?.data.title}</h3>
                            <Image data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" src={
                                    ourWorkData?.data?.data?.images.find(image => image.id === "image1").url
                                } height={1000} width={1000} alt={ourWorkData?.data?.data.title} />
                            <p dangerouslySetInnerHTML={{ __html: ourWorkData?.data?.data.para1 }} />
                            <p dangerouslySetInnerHTML={{ __html: ourWorkData?.data?.datapara2 }} />
                            {/* images */}
                            <div className={styles.images}>
                                <Image data-aos="fade-right" src={
                                    ourWorkData?.data?.data?.images.find(image => image.id === "image2").url
                                } height={1000} width={1000} alt={ourWorkData?.data?.data.title} />
                                <Image data-aos="fade-left" src={
                                    ourWorkData?.data?.data?.images.find(image => image.id === "image3").url
                                } height={1000} width={1000} alt={ourWorkData?.data?.data.title} />
                            </div>
                            <Image data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" src={
                                    ourWorkData?.data?.data?.images.find(image => image.id === "image4").url
                                } height={1000} width={1000} alt={ourWorkData?.data?.data.title} />
                            <p dangerouslySetInnerHTML={{ __html: ourWorkData?.data?.data.para3 }} />
                            <p dangerouslySetInnerHTML={{ __html: ourWorkData?.data?.data.para4 }} />

                            {/* explore */}
                            <div className={styles.explore}>
                                <h4>Explore Other Works</h4>
                                <div className={styles.scroll}>
                                    {
                                        ourWorkDataRelated?.data?.data.map((item, index) => {
                                            return (
                                                // exlcude current item
                                                item.id === data.id ? null :
                                                    <Image data-aos="fade-up" onClick={() => { router.push(ROUTES.OUR_WORKS + item.id) }} key={index} src={item.images.find((img) => img.id === "image1").url} alt={item.title} width={1000} height={1000} />
                                            )
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                        <WorkNumbers />
                        <Contact />
                    </Layout>
            }

        </div>
    )
}

export default WorkPage