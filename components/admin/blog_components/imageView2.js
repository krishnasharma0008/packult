import Image from 'next/image'
import React from 'react'

function ImageView2({ src1, name1, src2, name2 }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "max-content",
            padding: ".5rem",
            gap: "1rem",
        }} >
            <Image style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "max-content",
                borderRadius: "1rem",
            }} src={src1} alt={name1} width={1500} height={1500}></Image>

            <Image style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "max-content",
                borderRadius: "1rem",
            }} src={src2} alt={name2} width={1500} height={1500}></Image>
        </div>
    )
}

export default ImageView2