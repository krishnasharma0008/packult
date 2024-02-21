import Image from "next/image";
import styles from "../styles/components/contentLayouts.module.scss";
export default function ContentLayout2({ data }) {
  return (
    <div className={styles.Layout2}>
      {data.headType === "h2" ? <h2>{data.heading}</h2> : <h1>{data.heading}</h1>}
      <Image
        data-aos="fade-up"
        data-aos-offset="-500"
        data-aos-anchor-placement="top-bottom"
        src={data.imagePath}
        alt={data.imageName}
        height={1000}
        width={1000}
      />
      <p>{data.content1}</p>
    </div>
  );
}
