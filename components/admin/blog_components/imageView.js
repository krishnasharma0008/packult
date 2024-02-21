import Image from 'next/image'
import React from 'react'

function ImageView({ src, name }) {
    return (
        <Image style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "max-content",
            borderRadius: "1rem",
        }} src={src} alt={name} width={1500} height={1500}></Image>
    )
}

export default ImageView