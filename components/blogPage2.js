import Image from 'next/image'
import styles from '../styles/clientBlog.module.scss'

function BlogPage2({ data }) {

    // string date to date object to get day and month and year
    const date = (date) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'long' });
        const day = d.getDate();
        const year = d.getFullYear();
        return `${day} ${month} ${year}`
    }


    return (
        <div className={styles.blog2} >
            <div className={styles.head} >
                <Image data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" src={
                        data.images.find(image => image.id === "image1").url
                    } alt={data.title} width={1000} height={1000} />
                <h3>{data.title}</h3>
                <h5>{date(data.date)}</h5>
                <p dangerouslySetInnerHTML={{ __html: data.para1 + data.para2 }} />
            </div>
            <Image data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" src={
                    data.images.find(image => image.id === "image2").url
                } alt={data.title} width={1000} height={1000} />
            <p dangerouslySetInnerHTML={{ __html: data.para3 }} />
            <p dangerouslySetInnerHTML={{ __html: data.para4 }} />
            <p dangerouslySetInnerHTML={{ __html: data.para5 }} />
            <p dangerouslySetInnerHTML={{ __html: data.para6 }} />
        </div>
    )
}

export default BlogPage2
