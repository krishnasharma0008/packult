import Contact from "../../components/contact";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout3 from "../../components/contentLayout3";
import Layout from "../../components/layout";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/valueImprovement.module.scss";
import Head from "next/head";

function index() {
  const layout1 = {
    heading: "Value Improvement",
    content1:
      "In today’s competitive world, it is not only important to have a great packaging but the most cost efficient one to stay competitive and provide fuel for growth for the business. Our Packaging Value chain understanding is unparalleled and our deep expertise and understanding of various levers influencing cost helps us deliver the best packaging solutions at most optimum cost through interventions in specifications, print design, dimensions, conversion processes, complexity reduction, Design to Value and more! Our team of experts will analyze your current packaging and identify potential cost saving opportunities without compromising on the quality or functionality of the packaging.",
    imagePath: "/assets/images/value-improvement/1.png",
    imageName: "Value Improvement-Packaging Service",
    content2: "",
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
        <title>Value Improvement | Packaging Optimization | Packult</title>
        <meta
          name="description"
          content="Packult's value improvement services optimize your packaging process to increase efficiency and reduce costs. Our experts help you identify areas for improvement and implement effective solutions."
        />
        <link
          rel="canonical"
          href="https://packult.com/value-improvement"
        ></link>
        <link
          rel="alternate"
          href="https://packult.com/value-improvement"
          hreflang="en"
        ></link>
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
                                    "name": "Value Improvement",
                                    "item": "https://packult.com/value-improvement"

                                }]
                            }

                        )
                    }}
                />
      </Head>
      <div
        style={{
          minHeight: "85vh",
        }}
      >
        <section className={styles.content1}>
          <ContentLayout1 data={layout1} />
        </section>
        {/* <section>
                <ContentLayout3 data={layout2} />
            </section> */}

        <WorkNumbers />
        <Contact />
      </div>
    </Layout>
  );
}

export default index;
