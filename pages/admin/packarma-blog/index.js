import { useState } from "react"
import AdminLayout from "../../../components/admin/adminLayout"
import Packarma_BlogCard from "../../../components/admin/packarma_blogCard"
import styles from "../../../styles/admin/blogs.module.scss"
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../../utils/firebase_data_handler";


function Index() {


    const packarma_blog = useQuery(
        ["packarma_blog"],
        () => {
            return getAllData(`packarma_blog`);
        },
        {
            staleTime: 10000 * 60,
        }
    )


    console.log(packarma_blog);


    return (
        <AdminLayout>
            <div className={styles.blogs}>
                <h2>Blogs</h2>
                <hr />
                {
                    packarma_blog.isLoading ? <h3>Loading...</h3> : <div className={styles.all_blogs}>
                        {
                            packarma_blog?.data?.data?.map(blog => <Packarma_BlogCard
                                key={blog.id}
                                id={blog.id}
                                img={
                                    blog.images.find(image => image.id === "image1")?.url
                                }
                                title={blog.title}
                                description={
                                    blog.para1.length > 100 ? blog.para1.slice(0, 100) + "..." : blog.para1
                                }
                                layout={blog.layout}
                                images={blog.images}
                            />)
                        }
                    </div>
                }

            </div>
        </AdminLayout>
    )
}

export default Index