import Contact from "../../components/contact";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout3 from "../../components/contentLayout3";
import Layout from "../../components/layout";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/valueImprovement.module.scss";
import Head from "next/head";

function index() {
  const layout1 = {
    heading: "Application and Business Development",
    content1:
      "We pride ourselves in providing exceptional application and business development support to packaging converters helping them succeed in today’s highly competitive marketplace. We provide support with marketing and sales, co-developing new products and applications, identifying new business opportunities, expanding their customer base. building long-term partnerships with clients and providing after-sales support. With us, our converters can focus on what they do best: producing high-quality packaging.",
    imagePath: "/assets/images/application-and-businness-development/1.png",
    imageName: "Packaging Application And Development",
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
        <title>Packult - Packaging innovation & Business Development</title>
        <meta
          name="description"
          content="Packult's packaging application and business development services help you identify new opportunities for growth. Our experts provide strategic guidance and innovative solutions to help you succeed."
        />
        <link
          rel="canonical"
          href="https://packult.com/application-and-businness-development"
        ></link>
        <link
          rel="alternate"
          href="https://packult.com/application-and-businness-development"
          hreflang="en"
        ></link>
      </Head>
      <section className={styles.content1}>
        <ContentLayout1 data={layout1} />
      </section>
      {/* <section>
                <ContentLayout3 data={layout2} />
            </section> */}

      <WorkNumbers />
      <Contact />
    </Layout>
  );
}

export default index;
