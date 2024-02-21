import Contact from "../../components/contact"
import ContentLayout4 from "../../components/contentLayout4"
import ContentLayout3 from "../../components/contentLayout3"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/management-and-assistance.module.scss"
import ContentLayout1 from "../../components/contentLayout1"
import Head from "next/head"
function index() {
    const layout1 = {
        heading: "Mergers & Acquisitions",
        content1: "We provide end to end Mergers & Acquisitions support for converters of any size including Make ready procedures for dilution or expansion, financial due diligence, integration of culture & business processes.",
        imagePath: "/assets/images/management-and-assistance/1.png",
        imageName: "Packaging Mergers & Acquisitions",
        content2: "",
    }
    const layout2 = {
        heading: "We Improve the Quality of Your Product",
        imageName: "Adobe Icons",
        content1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",

    }
    return (
        <Layout>
            <div style={{
                minHeight: "85vh",
            }} >
                <Head>
                    <link rel="canonical" href="https://packult.com/mergers-and-acquisitions" />
                    <link rel="alternate" href="https://packult.com/mergers-and-acquisitions" hreflang="en" />
                    <title>Packaging Mergers & Acquisitions | Packult</title>
                    <meta name="description" content="Packult's packaging Mergers and Acquisitions services provide expert guidance for your packaging process. Our team of professionals helps you streamline operations and achieve your goals." />
                    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org/",
                                "@type": "BreadcrumbList",
                                "itemListElement": [{
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://packult.com/"
                                }, {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Mergers And Acquisitions",
                                    "item": "https://packult.com/mergers-and-acquisitions"

                                }]
                            }

                        )
                    }}
                />
                </Head>

                <section className={styles.content1} >
                    <ContentLayout1 data={layout1} />
                </section>
                {/* <section>
                <ContentLayout3 data={layout2} />
            </section> */}

                <WorkNumbers />
                <Contact />
            </div>
        </Layout>
    )
}

export default index