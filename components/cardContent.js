import Image from "next/image"
import Link from "next/link"
import styles from "../styles/components/cardContent.module.scss"
import { useRouter } from "next/router"
export default function CardContent({ data }) {
    const { number, heading, content, links, image, link , alt} = data;
    const router = useRouter();
    return (
        <div className={styles.cardContent} >

            <div className={styles.content} >
                <div className={styles.heading} >
                    <h3>{number}</h3>
                    <h2 onClick={() => {
                        router.push(link)
                    }} >{heading}</h2>
                </div>
                <p>{content}
                    {
                        heading === "Resourcing" ? <span  onClick={() => {
                            router.push(link)
                        }} >Read More</span> : null
                    }
                </p>

                {
                    links?.map((link, index) => (
                        <Link href={link.link}  key={index} >{link.text}</Link>
                    ))
                }
            </div>
            <div className={styles.image} >
                <Image data-aos="flip-left" src={image} width={1000} height={1000} alt={alt} />
            </div>
        </div>
    )
}
