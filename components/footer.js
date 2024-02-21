import styles from "../styles/components/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../common/routes";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link href={ROUTES.ABOUT}>About Us</Link>
            </li>
            <li>
              <Link href={ROUTES.GALLERY}>Our Work</Link>
            </li>
            <li>
              <Link href={ROUTES.SERVICES}>Services</Link>
            </li>
            {/* <li><Link href={ROUTES.GALLERY}>Gallery</Link></li> */}
            <li>
              <Link href={ROUTES.CARRERS}>Careers</Link>
            </li>
            {
              router.pathname==="/"?<li>
              <Link href="#blog">Blog</Link>
            </li>:null
            }
            <li>
              <Link href={ROUTES.PACKARMA_APP}>Packarma App</Link>
            </li>
            <li>
              <Link href={ROUTES.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <div className={styles.icons}>
            <Link
              data-aos="fade-up"
              data-aos-offset="-700"
              href="https://www.facebook.com/sustainovation"
            >
              <Image
                src="/assets/icons/facebook.svg"
                width={30}
                height={30}
                alt="Facebook Icon"
              />
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-offset="-700"
              href="https://www.instagram.com/packult2021/"
            >
              <Image
                src="/assets/icons/instagram.svg"
                width={30}
                height={30}
                alt="Instagram Icon"
              />
            </Link>
            <Link
              data-aos="fade-up"
              data-aos-offset="-700"
              href="https://www.linkedin.com/company/packult-studio-private-limited"
            >
              <Image
                src="/assets/icons/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
          <div className={styles.contact}>
            <p>
              <Link href="mailto: namaste@packult.com">
                namaste@packult.com
              </Link>
            </p>
            <p>
              <Link
                className={styles.whatsapp}
                href="https://api.whatsapp.com/send?phone=7718894807"
              >
                {" "}
                <Image
                  src="/assets/icons/whatsapp.svg"
                  width={30}
                  height={30}
                  alt="Whatsapp Icon"
                />
                7718894807
              </Link>
            </p>
            <p>
              7, Udyog Bhavan, Sonawala Rd,
              <br />
              Goregaon (E), Mumbai, Maharashtra
              <br />
              400063
            </p>
          </div>
        </div>
      </div>
      <p
        className={styles.madeBy}
        onClick={() => {
          router.push("https://digilligence.in");
        }}
      >
        {/* Designed & Developed by Digilligence */}
      </p>
    </div>
  );
}
