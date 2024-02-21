import Contact from "../../components/contact";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout3 from "../../components/contentLayout3";
import Layout from "../../components/layout";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/valueImprovement.module.scss";
import Head from "next/head";
function index() {
  const layout1 = {
    heading: "Resourcing",
    content1:
      "We pride ourselves in meeting our customers’ needs for quality manpower at every level with best quality resources pre-screened by our subject experts. We understand that it is not always feasible to increase headcount for temporary needs due to a sudden increase in bandwidth requirement (innovations & renovations, specification harmonization, cost savings projects, trials, NPD and roll out etc.), hence we support our Customers with quality manpower with the right fit for temporary requirement starting 6 months onwards. Whether the requirement is offsite or onsite or hybrid, we can offer tailormade solutions.",
    imagePath: "/assets/images/resourcing/1.png",
    imageName: "Outsourcing Packaging Experts",
    content2:
      "We also offer to startup’s and mid-size brands our services as their “extended Packaging Development team” backed with entire might of Packult’s multi domain/material expertise at a very competitive and affordable cost which gives our customers amazing solutions at a fraction of the cost of a full-fledged in-house Packaging Development team. Trust us to provide you with the best resourcing service in the industry.",
  };
  const layout2 = {
    heading: "We Improve the Quality of Your Product",
    imageName: "Adobe Icons",
    content1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",
  };
  return (
    <Layout>
      <Head>
        <title>
          Packaging Resourcing | Global Packaging Services | Packult
        </title>
        <meta
          name="description"
          content="Packult's packaging resourcing services provide global packaging solutions for businesses of all sizes. Our team of experts helps you source the right materials and manage your supply chain."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://packult.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Resourcing",
                  item: "https://packult.com/resourcing",
                },
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://packult.com/resourcing"></link>
        <link
          rel="alternate"
          href="https://packult.com/resourcing"
          hreflang="en"
        ></link>
      </Head>
      <div
        style={{
          minHeight: "85vh",
        }}
      >
        <section className={styles.content1}>
          <ContentLayout1 data={layout1} />
        </section>
      </div>

      <WorkNumbers />
      <Contact />
    </Layout>
  );
}

export default index;
