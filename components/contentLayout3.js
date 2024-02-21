import styles from "../styles/components/contentLayouts.module.scss";

export default function ContentLayout3({data}) {
  return (
    <div className={styles.Layout3} >
      <h1>{data.heading}</h1>
      <p>{data.content1}</p>
    </div>
  )
}
