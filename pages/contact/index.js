import Layout from "../../components/layout";
import Particles from "../../components/particles";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/contact-us.module.scss";
import { useRef, useState } from "react";
import { uploadData } from "../../utils/firebase_data_handler";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { useRouter } from "next/router";

function Index() {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [submitText, setSubmitText] = useState("Submit");
  const router = useRouter();

  //   const [show, setShow] = useState(false);
  //   const [showError, setShowError] = useState(false);
  const name = useRef();
  const email = useRef();
  const number = useRef();
  const message = useRef();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // months start at 0, so add 1 to get the current month
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitText("Submitting...");
    const data = {
      name: name.current.value,
      email: email.current.value,
      number: number.current.value,
      message: message.current.value,
      date: currentDateTime,
    };
    uploadData(data, `contacts`).then(() => " ", setLoading(false));

    emailjs
      .sendForm(
        "service_8ox3db9",
        "template_n29jlvg",
        form.current,
        "8uEIFo9S-l8MZSGT8"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setSubmitText("Submitted");
            router.push("/thankyou")

          }
        },
        (error) => {
          console.log(error.text);
          setSubmitText("Error");
        }
      );
  };

  return (
    <Layout
      pageMeta={{
        description:
          "We are always ready to answer any questions that interests you. Shoot!",
      }}
    >
      <Head>
        <link rel="canonical" href="https://packult.com/contact-us" />
        <link
          rel="alternate"
          href="https://packult.com/contact-us"
          hreflang="en"
        />
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
                                    "name": "Contact",
                                    "item": "https://packult.com/contact"

                                }]
                            }

                        )
                    }}
                />
      </Head>
      <div className={styles.lap_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.tablet_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.mobile_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="50vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.contact_us}>
        <div className={styles.content}>
          <div className={styles.left}>
            <form ref={form} onSubmit={handleSubmit}>
              <input
                ref={name}
                type="text"
                name="name"
                placeholder="Your Name*"
                required={true}
              />
              <input
                ref={email}
                type="email"
                name="email"
                placeholder="Email Address*"
                required={true}
              />
              <input
                ref={number}
                type="number"
                name="phone"
                placeholder="Phone Number"
              />
              <textarea
                ref={message}
                name="queries"
                placeholder="Share your thoughts or Queries"
                required={true}
              />
              <button onClick={handleSubmit} type="submit">
                {submitText}
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1 data-aos="fade-left">
              Contact
              <span className={styles.us}>
                <hr />
                Us
              </span>
            </h1>
            <p>
              We are always ready to answer any questions that interests you.
              Shoot!
            </p>
          </div>
        </div>
        <WorkNumbers />
      </div>
    </Layout>
  );
}

export default Index;
