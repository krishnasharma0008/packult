import Link from "next/link";
import styles from "../../styles/admin/components/navbar.module.scss";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../utils/firebase";
import { adminToken } from "../../core/localstorage";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "../../common/routes";

function Navbar() {
  const auth = getAuth(app);
  const router = useRouter();
  const currentRoute = router.pathname;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem(adminToken);
        router.push(ADMIN_ROUTES.LOGIN);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={styles.navbar}>
      <h1>Admin Panel</h1>
      <ul className={styles.customContainer}>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.BLOGS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.BLOGS}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.BLOGS_CREATE ? styles.selected : ""
            }
            href={ADMIN_ROUTES.BLOGS_CREATE}
          >
            New Blog
          </Link>
        </li>
        {/* <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.NEW_BLOG ? styles.selected : ""
            }
            href={ADMIN_ROUTES.NEW_BLOG}
          >
            BLOG 2
          </Link>
        </li> */}
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.PACKARMA_BLOGS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.PACKARMA_BLOGS}
          >
            Packarma Blogs
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.PACKARMA_BLOGS_CREATE ? styles.selected : ""
            }
            href={ADMIN_ROUTES.PACKARMA_BLOGS_CREATE}
          >
            Packarma New Blog
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.OUR_WORKS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.OUR_WORKS}
          >
            Our Works
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.NEW_WORK ? styles.selected : ""
            }
            href={ADMIN_ROUTES.NEW_WORK}
          >
            New Work
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.CONTACTS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.CONTACTS}
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.CAREERS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.CAREERS}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.TESTIMONIALS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.TESTIMONIALS}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.PACKARMA_TESTIMONIALS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.PACKARMA_TESTIMONIALS}
          >
            Packarma Testimonials
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.PACKARMA_OFFERS ? styles.selected : ""
            }
            href={ADMIN_ROUTES.PACKARMA_OFFERS}
          >
            Packarma Offers
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === ADMIN_ROUTES.PACKARMA_VIDEO ? styles.selected : ""
            }
            href={ADMIN_ROUTES.PACKARMA_VIDEO}
          >
            Packarma Video
          </Link>
        </li>
        {/* <li><Link className={currentRoute === ADMIN_ROUTES.PICTURES ? styles.selected : ""} href={ADMIN_ROUTES.PICTURES}>Career Images</Link></li> */}
      </ul>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

export default Navbar;
