import React from 'react'

function TitleWithDate2({ title, date, alignment, type }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: 'space-between',
            alignItems: "center",
            width: "100%",
            // invert the order of the title and date
            flexDirection: type === "left" ? "row" : "row-reverse",
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

export default TitleWithDate2