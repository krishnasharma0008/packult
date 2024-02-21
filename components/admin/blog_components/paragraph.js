import React from 'react'

function Paragraph({ children }) {
    return (
        <div>
            <p style={{
                fontSize: "1.5rem",
                margin: "0",
                marginTop: ".5rem",
                paddingLeft: ".5rem",
            }} >
                {children}
            </p>
        </div>
    )
}

export default Paragraph