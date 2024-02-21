import Image from "next/image";
import styles from "../styles/components/contentLayouts.module.scss";
export default function ContentLayout4({ data }) {
  return (
    <div className={styles.Layout4} >
      <h1>{data.heading}</h1>
      <p>{data.content1}</p>
      <Image data-aos="fade-up"
        data-aos-offset="200"
        data-aos-anchor-placement="top-bottom" src={data.imagePath} alt={data.imageName} height={1000} width={1000} />
      <p>{data.content2}</p>
    </div>
  )
}