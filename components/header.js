import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../common/routes";
import styles from "../styles/components/header.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  // sidenav
  const [sideNav, setsideNav] = useState(false);
  const openNav = () => {
    setsideNav(true);
  };
  const closeNav = () => {
    setsideNav(false);
  };

  // get the current route
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.nav}>
      <Link href={ROUTES.HOME} id="header_logo">
        <div className={styles.logo}>
          <Image
            src="/assets/logos/logo.svg"
            alt="Packult Logo"
            width={1000}
            height={1000}
          />
        </div>
        <div className={styles.mlogo}>
          <Image
            src="/assets/logos/logo.svg"
            alt="Packult Logo"
            width={1000}
            height={1000}
          />
        </div>
      </Link>

      <ul className={styles.links}>
        <li>
          {" "}
          <span
            className={
              currentRoute === ROUTES.BRAND_OWNERS ||
              currentRoute === ROUTES.PACKAGING_CONVERTERS
                ? styles.selected
                : ""
            }
            style={{
              cursor:"pointer"
            }}
          >
            {" "}
            SCOPE
          </span>
          <div className={styles.dropdown}>
            <Link href={ROUTES.BRAND_OWNERS}>
              <span>BRAND OWNERS</span>
            </Link>
            <Link href={ROUTES.PACKAGING_CONVERTERS}>
              <span>PACKAGING CONVERTERS</span>
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={currentRoute === ROUTES.GALLERY ? styles.selected : ""}
            href={ROUTES.GALLERY}
          >
            OUR WORK
          </Link>
        </li>        
        <li>
          <Link
            className={currentRoute === ROUTES.ABOUT ? styles.selected : ""}
            href={ROUTES.ABOUT}
          >
            ABOUT US
          </Link>
        </li>
        {/* <li><Link className={currentRoute === ROUTES.SERVICES ? styles.selected : ""} href={ROUTES.SERVICES}>SERVICES</Link></li> */}
        <li>
          {" "}
          <span
            className={
              [
                ROUTES.PACKAGING_INNOVATION,
                ROUTES.SUSTAINABLE_SOLUTION,
                ROUTES.VALUE_IMPROVEMENT,
                ROUTES.OPERATIONAL_EXCELLENCE,
                ROUTES.SOURCING_EXCELLENCE,
                ROUTES.RESOURCING,
                ROUTES.APP_and_Business,
              ].includes(currentRoute)
                ? styles.selected
                : ""
            }
            style={{
              cursor:"pointer"
            }}
          >
            {" "}
            SERVICES
          </span>
          <div className={styles.dropdown}>
            <Link href={ROUTES.VALUE_IMPROVEMENT}>
              <span>VALUE IMPROVEMENT</span>
            </Link>
            <Link href={ROUTES.PACKAGING_INNOVATION}>
              <span>PACKAGING INNOVATIONS</span>
            </Link>
            <Link href={ROUTES.ARTWORK_AND_GRAPHICS}>
              <span>ARTWORKS & GRAPHICS MANAGEMENT</span>
            </Link>
            <Link href={ROUTES.SUSTAINABLE_SOLUTION}>
              <span>SUSTAINABLE SOLUTIONS</span>
            </Link>
            <Link href={ROUTES.SOURCING_EXCELLENCE}>
              <span>SOURCING EXCELLENCE</span>
            </Link>
            <Link href={ROUTES.RESOURCING}>
              <span>RESOURCING</span>
            </Link>
            <Link href={ROUTES.OPERATIONAL_EXCELLENCE}>
              <span>OPERATIONAL EXCELLENCE</span>
            </Link>
            <Link href={ROUTES.APP_and_Business}>
              <span>APPLICATION AND BUSINESS DEVELOPMENT</span>
            </Link>
            <Link href={ROUTES.MANAGEMENT_AND_ASSISTANCE}>
              <span>MERGERS & ACQUISITIONS</span>
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={currentRoute === ROUTES.PACKARMA_APP ? styles.selected : ""}
            href={ROUTES.PACKARMA_APP}
          >
            PACKARMA APP
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ROUTES.CONATCT_US
                ? styles.selected_contact
                : styles.contact
            }
            href={ROUTES.CONATCT_US}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      
      <div className={styles.mlinks}>
        {/* hamburgr menu */}
        <Image
          onClick={openNav}
          src="/assets/icons/hamburger.png"
          alt="#"
          width={1000}
          height={1000}
        />
        {/* sidenav */}
        <div className={sideNav ? styles.sidenav : styles.sidenav_close}>
          {/* closebutton */}
          <div className={styles.closebtn}>
            <Image
              onClick={closeNav}
              src="/assets/icons/close.png"
              alt="Close"
              width={1000}
              height={1000}
            />
          </div>
          <ul>
            <li>
              <Link
                className={
                  currentRoute === ROUTES.BRAND_OWNERS ? styles.selected : ""
                }
                href={ROUTES.BRAND_OWNERS}
              >
                BRAND OWNERS
              </Link>
            </li>
            <li>
              <Link
                className={
                  currentRoute === ROUTES.PACKAGING_CONVERTERS
                    ? styles.selected
                    : ""
                }
                href={ROUTES.PACKAGING_CONVERTERS}
              >
                PACKAGING CONVERTERS
              </Link>
            </li>
            <li>
              <Link
                className={
                  currentRoute === ROUTES.GALLERY ? styles.selected : ""
                }
                href={ROUTES.SERVICES}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                className={currentRoute === ROUTES.ABOUT ? styles.selected : ""}
                href={ROUTES.GALLERY}
              >
                OUR WORK
              </Link>
            </li>
            <li>
              <Link
                className={
                  currentRoute === ROUTES.SERVICES ? styles.selected : ""
                }
                href={ROUTES.ABOUT}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                className={currentRoute === ROUTES.PACKARMA_APP ? styles.selected : ""}
                href={ROUTES.PACKARMA_APP}
              >
                PACKARMA APP
              </Link>
            </li>
            <li>
              <Link
                className={
                  currentRoute === ROUTES.CONATCT_US
                    ? styles.selected_contact
                    : styles.contact
                }
                href={ROUTES.CONATCT_US}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
