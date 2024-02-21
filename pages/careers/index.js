import Image from "next/image";
import CarrersCard from "../../components/carrersCard";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import Particles from "../../components/particles";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/carrers.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../utils/firebase_data_handler";
import Head from "next/head";
function Index() {
  const careerImages = useQuery(
    ["careers_images"],
    () => {
      return getAllData("careers_images");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  const careers = useQuery(
    ["careers"],
    () => {
      return getAllData("careers");
    },
    {
      staleTime: 10000 * 60,
    }
  );

  return (
    <Layout
      pageMeta={{
        description:
          "Join us in our quest for the best that Packaging has to offer",
      }}
    >
      <Head>
        <title>Careers at Packult | Join Our Team of Packaging Experts</title>
        <meta name="description" content="Join the team at Packult and be part of a company that is changing the packaging industry. We offer exciting career opportunities for packaging experts who are passionate about innovation and sustainability." />
        <link rel="canonical" href="https://packult.com/careers" />
        <link rel="alternate" href="https://packult.com/careers" hreflang="en" />
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
                  "name": "Carrers",
                  "item": "https://packult.com/carrers"

                }]
              }

            )
          }}
        />
      </Head>
      <div className={styles.lap_particles}>
        <Image
          src="/assets/images/vectors/1.png"
          alt="vector images"
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "1",
            width: "25vw",
            height: "max-content",
          }}
        />
        <Particles
          color={"rgba(194, 217, 80, 0.5)"}
          height="50vw"
          width="150vw"
          top="-10vw"
          left="75vw"
          blur="3vw"
        />
        <Particles
          color={"#A4FAFF"}
          height="50vw"
          width="150vw"
          top="10vw"
          left="-130vw"
          blur="10vw"
        />
        {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="60vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' /> */}
      </div>
      <div className={styles.tablet_particles}>
        <Image
          src="/assets/images/vectors/1.png"
          alt="vector images"
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            top: "5vw",
            right: "0",
            zIndex: "1",
            width: "25vw",
            height: "max-content",
          }}
        />
        <Particles
          color={"rgba(194, 217, 80, 0.5)"}
          height="50vw"
          width="150vw"
          top="-10vw"
          left="75vw"
          blur="3vw"
        />
        <Particles
          color={"#A4FAFF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-130vw"
          blur="10vw"
        />
        {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="70vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' /> */}
      </div>
      <div className={styles.mobile_particles}>
        <Image
          src="/assets/images/vectors/1.png"
          alt="vector images"
          width={1000}
          height={1000}
          style={{
            position: "absolute",
            top: "5vw",
            right: "0",
            zIndex: "1",
            width: "25vw",
            height: "max-content",
          }}
        />
        <Particles
          color={"rgba(194, 217, 80, 0.5)"}
          height="50vw"
          width="150vw"
          top="-10vw"
          left="75vw"
          blur="3vw"
        />
        <Particles
          color={"#A4FAFF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-130vw"
          blur="10vw"
        />
        {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="150vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="240vw" left="-130vw" blur='5vw' /> */}
      </div>
      <div className={styles.carrers}>
        <h1>
          <span>
            <div className={styles.background}></div> Join us in our
          </span>{" "}
          quest for the best that Packaging has to offer
        </h1>
        <p>
          To be the company our customers want us to be, It takes an eclectic
          group of passionate operators. Get to know the people Leading
        </p>
        <div className={styles.images}>
          {careerImages.data?.data.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.image}
                width={1000}
                height={1000}
                alt={image.caption}
              />
            );
          })}
          <Image
            src="/assets/images/carrers/carrers (1).png"
            width={1000}
            height={1000}
            alt="Packaging Consultant"
          />
          <Image
            src="/assets/images/carrers/carrers (2).png"
            width={1000}
            height={1000}
            alt="Packaging Experts"
          />
        </div>

        <div className={styles.content}>
          <h3>We&apos;re Hiring</h3>
          <div className={styles.data}>
            {careers.data?.data.map((career, index) => {
              return (
                <>
                  {career.title}
                  <CarrersCard
                    key={index}
                    id={career.id}
                    title={career.designation}
                    workHours={career.workHours}
                    exp={career.exp}
                    location={career.location}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <WorkNumbers />
      <Contact />
    </Layout>
  );
}

export default Index;
