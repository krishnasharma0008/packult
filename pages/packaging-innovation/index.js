import Contact from "../../components/contact";
import WorkNumbers from "../../components/workNumbers";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout2 from "../../components/contentLayout2";
import styles from "../../styles/packagingSolution.module.scss";
import Layout from "../../components/layout";
import Head from "next/head";

export default function index() {
  const layout1 = {
    heading: "Packaging Innovations",
    content1: "Our team of dedicated and experienced packaging experts from multiple packaging domains bring creativity and knowledge under one roof. With the combination of in-house and outsourced resources and careful analysis of packaging brief, we provide world class future-ready packaging solutions that elevates product quality, improves imagery, and enhances shelf appeal within the cost brief. From concept to implementation our experts have it all covered. We pride ourselves on providing top-notch packaging solutions to businesses of all sizes. ",
    imagePath: "/assets/images/packaging-solution/1.png",
    imageName: "Outsourcing Packaging Experts",
    content2: "From development of packaging concepts, innovative shapes, 2D / 3D modelling, mock-ups, artworks, Structure and specifications, we take care of all your packaging needs. So, choose us and let us take care of all your packaging innovation needs!",
  }
  const layout2 = {
    heading: "Graphic Design",
    imagePath: "/assets/images/packaging-solution/2.png",
    imageName: "Adobe Icons",
    content1: "We understand the importance of visual appeal in packaging and that's why we offer top-notch graphic designing service. We have a strong team of Creative and graphic designers who work closely with our customers to understand the brief and create visually stunning logos & designs that will not only retain your brand essence but also make them stand out on the shelves. Our creative team is equipped with high-end software and can also generate CGI & Hero images for your pack and adapt them to various SKUs & Pack formats. Whether you're looking for a minimalist design or something bold and colourful, our team can deliver",
  }
  const layout3 = {
    heading: "Structural Engineering",
    imagePath: "/assets/images/packaging-solution/3.png",
    imageName: "Round Edge Shapes",
    content1: "",
  }
  return (
    <Layout>
      <Head>
        <title>Packult | Custom Packaging Solutions | New Packaging designs</title>
        <meta name="description" content="Packult provides custom packaging solutions for businesses worldwide. Our innovative designs and sustainable solutions help you stand out in the market." />
        <link rel="canonical" href="https://packult.com/packaging-innovation" />
        <link rel="alternate" href="https://packult.com/packaging-innovation" hreflang="en" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "name": "Packaging Innovations",
                "item": "https://packult.com/packaging-innovation"
              }]
            })
          }}
        />

      </Head>
      <div style={{
        minHeight: "85vh",
      }} >
        <section className={styles.content1} >
          <ContentLayout1 data={layout1} />
        </section>
        {/* <section>
        <ContentLayout2 data={layout2} />
      </section>
      <section>
        <ContentLayout2 data={layout3} />
      </section> */}
        <WorkNumbers />
        <Contact />
      </div>
    </Layout>
  )
}
