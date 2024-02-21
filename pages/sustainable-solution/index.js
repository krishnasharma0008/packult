import React from 'react'
import Contact from '../../components/contact'
import ContentLayout1 from '../../components/contentLayout1'
import Layout from '../../components/layout'
import WorkNumbers from '../../components/workNumbers'
import styles from "../../styles/sustainable-solution.module.scss"
import Head from 'next/head'

function index() {
    const layout1 = {
        heading: "Sustainable Solution",
        content1: "Sustainability is at the core of everything we do. The Packult team is highly adaptive to the changing customer needs in development of eco-friendly solutions. Our sustainable packaging solutions are intended to be in harmony with nature without impacting performance or aesthetics. ",
        imagePath: "/assets/images/sustainable-solution/1.png",
        imageName: "sustainable food packaging solutions",
        content2: "",
    }
    return (
        <Layout>
            <Head>
                <title>Packult - Sustainable and Eco-Friendly Packaging Solutions</title>
                <meta name="description" content="Packult offers sustainable packaging solutions to reduce your business's environmental impact. Our eco-friendly packaging options help you meet your sustainability goals." />
                <link rel="canonical" href="https://packult.com/sustainable-solution" />
                <link rel="alternate" href="https://packult.com/sustainable-solution" hreflang="en" />
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
                                    "name": "Sustainable Solution",
                                    "item": "https://packult.com/sustainable-solution"
                                }]
                            }
                        )
                    }}
                />
            </Head>
            <div style={{
                minHeight: "85vh",
            }} >

                <section className={styles.content1} >
                    <ContentLayout1 data={layout1} />
                </section>
                <WorkNumbers />
                <Contact />
            </div>
        </Layout>
    )
}

export default index