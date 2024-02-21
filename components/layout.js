import Footer from "./footer";
import Header from "./header";
import MetaHead from "./metaHead";
import styles from "../styles/components/layout.module.scss";

export default function Layout({ children, pageMeta }) {
    return (
        <div className={styles.layout} >
            <MetaHead pageMeta={pageMeta} />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
