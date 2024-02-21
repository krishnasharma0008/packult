import Link from "next/link"

const Index= () => {
        return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"5",
            justifyContent:"center",
            alignItems:"center",
            width:"100vw",
            height:"100vh"

        }} >
    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_sqpjokxl.json"    background="transparent"   speed="1"  style={{width: "100%", height: "40%"}}    autoplay  ></lottie-player>
    <Link href="/" style={{
        border:"none",
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"black",
        color:"white",
        cursor:"pointer",
        fontSize:"15px"
    }} >
        Go Home
    </Link>
       </div>
    )
}

export default Index