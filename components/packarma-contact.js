import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/components/contact.module.scss";
import Image from "next/image";
import { uploadData } from "../utils/firebase_data_handler";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { ROUTES } from "../common/routes";

export default function PackarmaContact() {
  const [mobile, setMobile] = useState(false);
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

  useEffect(() => {
    //   fetch blog data using api
    //Aos.init();
    setMobile(window.innerWidth < 768 ? true : false);
  }, []);

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
        {mobile ? (
          <div className={styles.icons} >         
            <Link href="https://www.linkedin.com/showcase/packarma/" target="_blank">
              <Image
                src="/assets/icons/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Icon"
                //style={{position:"relative",marginRight:"-3vw",top:"3vw"}}
              />
            </Link>
          </div>
        ):(
          <div className={styles.icons} >         
            <Link href="https://www.linkedin.com/showcase/packarma/" target="_blank">
              <Image
                src="/assets/icons/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Icon"
                //style={{position:"relative",marginRight:"-3vw",top:"3vw"}}
              />
          </Link>
        </div>
        )}
        </div>


      </div>
    </div>
  );
}
