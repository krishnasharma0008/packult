import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/our-works.module.scss"
import OurWorkCard from "../../../components/admin/ourWorkCard"
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../../utils/firebase_data_handler";


function Index() {
    const our_works = useQuery(
        ["our_works_v2"],
        () => {
            return getAllData(`Our_Works_V2`);
        },
        {
            staleTime: 10000 * 60,
        }
    )
    return (
        <AdminLayout>
            <div className={styles.ourWorks}>
                <h2>Our Works</h2>
                <hr />
                <div className={styles.all_works} >
                    {
                        our_works.isLoading ? <h3>Loading...</h3> : our_works?.data?.data.map(ourWork => <OurWorkCard key={ourWork.id} data={ourWork} />)
                    }
                </div>
            </div>
        </AdminLayout>
    )
}

export default Index