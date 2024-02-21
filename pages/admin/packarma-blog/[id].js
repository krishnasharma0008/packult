import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import ContentLayout1 from '../../../components/admin/contentLayout1'
import { useRouter } from 'next/router'

function Index() {
    const router = useRouter()
    const params = router.query

    const [loading, setloading] = useState(true)
    const [blog, setblog] = useState({})
    useEffect(() => {
        if (!params.id) return
        // get blog using id
        console.log(params.id);
        fetch(`/api/blog/getById?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setblog(data)
                setloading(false)
            })

    }, [params.id])

    return (
        <AdminLayout>
            {
                loading ? <h3>Loading...</h3> : blog.layout === 'layout1' ? <ContentLayout1 isAdmin={true} data={blog} /> : <h3>Layout not found</h3>

            }
        </AdminLayout>
    )
}

export default Index