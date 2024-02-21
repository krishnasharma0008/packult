import { useState } from "react"
import AdminLayout from "../../../components/admin/adminLayout"
import BlogCard from "../../../components/admin/blogCard"
import styles from "../../../styles/admin/blogs.module.scss"
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../../utils/firebase_data_handler";


function Index() {


    const blogs_v2 = useQuery(
        ["blogs_v2"],
        () => {
            return getAllData(`Blogs_V2`);
        },
        {
            staleTime: 10000 * 60,
        }
    )


    console.log(blogs_v2);


    return (
        <AdminLayout>
            <div className={styles.blogs}>
                <h2>Blogs</h2>
                <hr />
                {
                    blogs_v2.isLoading ? <h3>Loading...</h3> : <div className={styles.all_blogs}>
                        {
                            blogs_v2?.data?.data?.map(blog => <BlogCard
                                key={blog.id}
                                id={blog.id}
                                img={
                                    blog.images.find(image => image.id === "image1").url
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