import styles from "../styles/components/heading.module.scss"

export default function Heading({ heading, line = false, color = undefined }) {
    return (
        <div className={styles.heading} >
            <h1 style={{
                color: color ? color : null,
            }} >
                {
                    heading
                }
            </h1>
            {
                line && <hr />
            }
        </div>
    )
}
