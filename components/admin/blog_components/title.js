import React from 'react'

function Title({ title }) {
    return (
        <h1 style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",

        }} >
            {title}
        </h1>
    )
}

export default Title