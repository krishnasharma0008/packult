import { useRef, useState } from "react";
import styles from "../../styles/admin/auth.module.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebase";
import Toast from "../../components/toast";
import { adminToken } from "../../core/localstorage";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "../../common/routes";
import Image from "next/image";

function Index() {
  const email = useRef();
  const password = useRef();
  const auth = getAuth(app);
  const [toast, settoast] = useState(false);
  const [toastMessage, settoastMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem(adminToken, user.accessToken);
        router.push(ADMIN_ROUTES.BLOGS);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          settoast(true);
          settoastMessage("Wrong password");
          setTimeout(() => {
            settoast(false);
          }, 3000);
        }
        if (errorCode === "auth/user-not-found") {
          settoast(true);
          settoastMessage("User not found");
          setTimeout(() => {
            settoast(false);
          }, 3000);
        }
      });
  };

  return (
    <div className={styles.auth_container}>
      <Image
        src="/assets/logos/logo.svg"
        height={1000}
        width={1000}
        alt="logo"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input ref={email} type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input ref={password} type="password" id="password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
      {toast && <Toast message={toastMessage} />}
    </div>
  );
}

export default Index;
