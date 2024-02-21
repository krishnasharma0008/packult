import styles from "../styles/components/particles.module.scss"

function Particles({ width, height, color, top = 0, left = 0, blur = "5vw" }) {


    return (
        <div className={styles.particles} style={{
            width: width,
            height: height,
            backgroundColor: color,
            top: top,
            left: left,
            filter: `blur(${blur})`
        }}></div>
    )
}

export default Particles