import { useRef, useState } from "react";
import styles from "../styles/components/contact.module.scss";
import Image from "next/image";
import { uploadData } from "../utils/firebase_data_handler";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { ROUTES } from "../common/routes";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const number = useRef();
  const message = useRef();
  const router = useRouter();

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
    <div className={styles.contact}>
      <h2>Have a project in mind?</h2>
      <div className={styles.formContainer}>
        <div>
          <h4>Contact Us!</h4>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              ref={name}
              placeholder="Your name*"
              required={true}
            />
            <input
              type="email"
              ref={email}
              placeholder="Email address*"
              required={true}
            />
            <input
              type="number"
              ref={number}
              placeholder="Phone number (optional)"
            />
            <textarea ref={message} placeholder="Your message*" />
            <button type="submit" required={true}>
              {submitText}
            </button >
          </form>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-offset="-500"
          src="/assets/images/components/contactPerson.svg"
          height={100}
          width={100}
          alt={"Contact Packult"}
        />
      </div>
    </div>
  );
}
