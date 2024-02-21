import Image from "next/image"
import CardContent from "../../components/cardContent"
import Contact from "../../components/contact"
import Layout from "../../components/layout"
import Particles from "../../components/particles"
import WorkNumbers from "../../components/workNumbers"
import { data } from "../../data/services"
import styles from "../../styles/services.module.scss"
import Head from "next/head"
import Script from "next/script"

function index() {
    return (
        <Layout pageMeta={{ description: "Comprehensive Packaging services and solutions for Brand Owners & Packaging converters" }} >
            <Head>
                <title>Custom Packaging Services | Innovative Design & Sustainable Solutions | Packult</title>
                <meta name="description" content="Packult offers a wide range of custom packaging services to help your business stand out in the market. Our innovative designs and sustainable solutions are tailored to your unique needs." />
                <link rel="canonical" href="https://packult.com/services" />
                <link rel="alternate" href="https://packult.com/services" hreflang="en" />
                <link rel="canonical" href="https://packult.com/terms-and-conditions" />
                <link rel="alternate" href="https://packult.com/terms-and-conditions" hreflang="en" />

            </Head>
            <Script
                id="SERVICE"
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
                                "name": "Services",
                                "item": "https://packult.com/services"

                            }]
                        }

                    )
                }}
            />
            <div className={styles.lap_particles}>
                <Image src="/assets/images/vectors/2.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "0", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#2D25EE"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="10vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="60vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.tablet_particles}>
                <Image src="/assets/images/vectors/2.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#2D25EE"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="70vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.mobile_particles}>
                <Image src="/assets/images/vectors/2.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#2D25EE"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="150vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="240vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.services} >
                <h1>Services</h1>
                <p className={styles.paragraph} >We provide your product world class solution with our service and expertise. </p>
                <div className={styles.services__content} >
                    {
                        data.map((item, index) => {
                            return <CardContent key={index} data={item} />
                        })

                    }
                </div>
            </div>
            <WorkNumbers />
            <Contact />

        </Layout>
    )
}

export default index