import React from 'react'

function TitleWithDate({ title, date, alignment }) {
    return (
        <div style={{
            padding: ".5rem",
        }} >
            <h1 style={{
                textAlign: alignment,
                fontSize: "3rem",
                fontWeight: "bold",
                margin: "0",
            }} >
                {title}
            </h1>
            <h3 style={{
                textAlign: alignment,
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "0",
                marginTop: ".5rem",
                paddingLeft: alignment === "left" ? ".5rem" : "0",
                // colour grey
                color: "#808080",
            }} >
                {date}
            </h3>
        </div>
    )
}

export default TitleWithDate