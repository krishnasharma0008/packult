import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/clientBlog.module.scss"
import BlogPage1 from "../../components/blogPage1"
import BlogPage2 from "../../components/blogPage2"
import BlogPage3 from "../../components/blogPage3"
import Layout from "../../components/layout"
//import BlogCarousel from "../../components/blogCarousel"
import PackarmaBlogCarousel from "../../components/packarmaBlogCarousel"
import WorkNumbers from "../../components/workNumbers"
import Contact from "../../components/contact"
import { getDataById } from "../../utils/firebase_data_handler"
import { useQuery } from "@tanstack/react-query"

function Index() {

    const router = useRouter()
    const params = router.query

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
    

    return (
        <Layout>
            <div className={styles.blog} >
                {
                    blogData.isLoading ? <h1>Loading...</h1> :
                        blogData?.data?.data.layout === "layout1" ? <BlogPage1 data={blogData?.data?.data} /> :
                            blogData?.data?.data.layout === "layout2" ? <BlogPage2 data={blogData?.data?.data} /> :
                                blogData?.data?.data.layout === "layout3" ? <BlogPage3 data={blogData?.data?.data} /> :
                                    <h1>Oops, Something is wrong</h1>
                }
            </div>
            <PackarmaBlogCarousel heading={"Related Articles For you"} isBlogPage={true} />
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}

export default Index