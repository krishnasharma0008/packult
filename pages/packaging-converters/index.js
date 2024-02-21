import Layout from "../../components/layout";
import styles from "../../styles/brand-owners.module.scss";
import { data } from "../../data/packaging-converters.js";
import CardContent from "../../components/cardContent";
import WorkNumbers from "../../components/workNumbers";
import Contact from "../../components/contact";
import Image from "next/image";
import Particles from "../../components/particles";
import Head from "next/head";
export default function index() {
    return (
        <Layout>
            <Head>
                <title>Packaging Converters | Custom Packaging Solutions | Packult</title>
                <meta name="description" content="Packult's packaging converters specialize in creating custom packaging solutions for your business. Our innovative designs and sustainable materials help you stand out in the market." />
                <link rel="canonical" href="https://packult.com/packaging-converters" />
                <link rel="alternate" href="https://packult.com/packaging-converters" hreflang="en" />
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
                                    "name": "Packaging Converters",
                                    "item": "https://packult.com/packaging-converters"

                                }]
                            }

                        )
                    }}
                />
            </Head>
            <div className={styles.lap_particles}>
                <Image src="/assets/images/vectors/4.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "0", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#1DA1F2"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="10vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="60vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.tablet_particles}>
                <Image src="/assets/images/vectors/4.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#1DA1F2"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="70vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.mobile_particles}>
                <Image src="/assets/images/vectors/4.png" alt="vector images" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
                />
                <Particles color={"#1DA1F2"} height="50vw" width="150vw" top="-10vw" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="150vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="240vw" left="-130vw" blur='5vw' />
            </div>
            <div className={styles.brandowners} >
                {/* <Particles color={"#1DA1F2"} height="50vw" width="150vw" top="-15vh" left="80vw" blur='10vw' />
                <Particles color={"#FFE1BD"} height="50vw" width="150vw" top="10vh" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vh" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="190vh" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="380vh" left="-130vw" blur='5vw' /> */}
                <h1>Packaging Converters</h1>
                <p>
                    With our global connections and strong machine expertise, we bring in the best of the latest technologies for improving efficiency, productivity & safety at your plant with highest quality of service.
                </p>

                <div className={styles.brandowners__content} >
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
