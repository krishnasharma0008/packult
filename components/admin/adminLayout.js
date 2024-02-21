import MetaHead from "../metaHead";
import Navbar from "./navbar";
import { useEffect, useState } from "react"
import { adminToken } from "../../core/localstorage"
import { useRouter } from "next/router";
import styles from "../../styles/admin/adminLayout.module.scss"

export default function AdminLayout({ children, pageMeta }) {
    const router = useRouter();
    const [loading, setloading] = useState(true)
    useEffect(() => {
        var token = localStorage.getItem(adminToken)
        if (!token) {
            router.push("/admin")
            return
        }
        setloading(false)
    }, [router])
    return (
        
        <div className={styles.admin_layout} >
            <MetaHead pageMeta={pageMeta} />
            {
                !loading ? (
                    <div className={styles.content}>
                        <Navbar />
                        {children}
                    </div>
                ) : loading
            }
        </div>
    )
}
