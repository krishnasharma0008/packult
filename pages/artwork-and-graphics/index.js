import Contact from "../../components/contact"
import ContentLayout1 from "../../components/contentLayout1"
import ContentLayout3 from "../../components/contentLayout3"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/valueImprovement.module.scss"
import Head from "next/head"

function index() {
    const layout1 = {
        heading: "Artwork & Graphics Management",
        content1: "We understand the importance of visual appeal in packaging and offer top-notch graphic designing service. We have a strong team of creative and graphic designers who work closely with our customers to understand the brief and create visually stunning designs that not only retains the brand essence but also makes them stand out on the shelves. Our creative team is equipped with high-end software to generate CGI and Hero images for your pack and adapt them to various SKUs & Pack formats. Whether you're looking for a minimalist design or something bold and colourful, our team can deliver.",
        imagePath: "/assets/images/artwork-and-graphics/1.png",
        imageName: "eco packaging Idea",
    }

    return (
        <Layout>
            <Head>
                <title>Packaging Artwork & Graphics | Packaging Design | Packult</title>
                <meta name="description" content="Packult's packaging artwork and graphics services create eye-catching designs for your packaging. Our team of designers helps you convey your brand message and attract customers." />
                <link rel="canonical" href="https://packult.com/artwork-and-graphics" />
                <link rel="alternate" href="https://packult.com/artwork-and-graphics" hreflang="en" />
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
                                    "name": "Artwork & Graphics Management",
                                    "item": "https://packult.com/artwork-and-graphics"

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
            </div>


            <WorkNumbers />
            <Contact />
        </Layout>
    )
}

export default index