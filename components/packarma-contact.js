import Link from "next/link";
import { useRef, useState } from "react";
import styles from "../styles/components/contact.module.scss";
import Image from "next/image";
import { uploadData } from "../utils/firebase_data_handler";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { ROUTES } from "../common/routes";

export default function PackarmaContact() {
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
      from:"Packarma",
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

  // const inputStyle = {
  //   width: 'calc(90% - 10px)', // Adjust the width as needed
  //   marginRight: '30px', // Add margin between the two input fields
  // };

  return (
    <div className={styles.contact}>
      <h2>GET IN TOUCH WITH US!</h2>
      <div className={styles.formContainer}>
        <div>
          <h4></h4>
          <form ref={form} onSubmit={handleSubmit}>
            {/* <label>First Name *</label> */}
            <input
              type="text"
              ref={name}
              placeholder="Your name*"
              required={true}
            />
             {/* <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                <label>Phone Number *</label><br /> */}
                <input
                  type="number"
                  ref={number}
                  placeholder="Phone number"
                  required={true}
                  // style={inputStyle}
                />                
                {/* </div>
                <div>
                  <label>Email *</label><br /> */}
                  <input
                    type="email"
                    ref={email}
                    placeholder="Email address*"
                    required={true}
                    //style={inputStyle}
                  />
                {/* </div>
             </div>              
            <label>Message *</label>*/}
            <textarea ref={message} placeholder="Your message*" />
            <button type="submit" required={true}>
              {submitText}
            </button >
          </form>
        </div>
        <div>
          <Image
            data-aos="fade-up"
            data-aos-offset="-500"
            src="/assets/images/components/contactPerson.svg"
            height={100}
            width={100}
            alt={"Contact Packult"}
          />
        {/* Move the social icons here, right below the Image component */}
        <div className={styles.icons}>
          {/* <Link href="https://www.facebook.com/sustainovation">
              <Image
                src="/assets/icons/facebook.svg"
                width={30}
                height={30}
                alt="Facebook Icon"
              />
          </Link>
          <Link href="https://www.instagram.com/packult2021/">
              <Image
                src="/assets/icons/instagram.svg"
                width={30}
                height={30}
                alt="Instagram Icon"
              />
          </Link> */}
          <Link href="https://www.linkedin.com/showcase/101407321/admin/feed/posts/">
              <Image
                src="/assets/icons/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Icon"
              />
          </Link>
        </div>
        </div>


      </div>
    </div>
  );
}
