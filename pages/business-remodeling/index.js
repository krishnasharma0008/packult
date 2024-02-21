import Contact from "../../components/contact";
import WorkNumbers from "../../components/workNumbers";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout2 from "../../components/contentLayout2";
import styles from "../../styles/packagingSolution.module.scss";
import Layout from "../../components/layout";
import Head from "next/head";
export default function index() {
  const layout1 = {
    heading: "Business Remodeling",
    content1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",
    imagePath: "/assets/images/layout/img (5).png",
    imageName: "Recyclable Packaging",
    content2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ullam, rerum nobis ducimus facilis harum odit temporibus atque molestiae vitae quae nihil laboriosam qui in, deserunt dignissimos tempora quam magnam at? Id vitae, error quasi possimus similique nemo nostrum vel? Illo repellat doloremque reprehenderit voluptas voluptatum nam eius libero error. Minima delectus soluta ipsam exercitationem magnam? Possimus deleniti repellat, ipsam facilis harum debitis cum ipsa ex distinctio aperiam praesentium esse facere nam eos doloremque error libero nulla excepturi a, aliquid itaque rerum sapiente minima. Expedita molestias, corrupti neque nesciunt amet mollitia laboriosam odio architecto tempora nihil, ab hic pariatur sapiente excepturi aspernatur veritatis sit nobis tempore libero sed impedit aliquid enim magnam! Magni, voluptatibus expedita velit error optio repudiandae soluta eveniet iusto dolorem nostrum, reiciendis molestiae aperiam sit possimus repellat aliquid quidem tenetur magnam. Atque, eveniet. In, quae excepturi sint quis tenetur assumenda esse eum laudantium rerum velit, eos inventore.",
  }
  const layout2 = {
    heading: "Mergers and Acquisition",
    imagePath: "/assets/images/layout/img (12).png",
    imageName: "Adobe Icons",
    content1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",
  }
  const layout3 = {
    heading: "Co-Operative Marketing",
    imagePath: "/assets/images/layout/img (13).png",
    imageName: "Round Edge Shapes",
    content1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",
  }
  return (
    <Layout>
      <Head>
        <link rel="canonical" href="https://packult.com/application-and-businness-development" />
        <link rel="alternate" href="https://packult.com/application-and-businness-development" hreflang="en" />
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
                  "name": "Application and Business Development",
                  "item": "https://packult.com/application-and-businness-development"

                }]
              }

            )
          }}
        />
      </Head>
      <section className={styles.content1} >
        <ContentLayout1 data={layout1} />
      </section>
      <section>
        <ContentLayout2 data={layout2} />
      </section>
      <section>
        <ContentLayout2 data={layout3} />
      </section>
      <WorkNumbers />
      <Contact />
    </Layout>
  )
}
