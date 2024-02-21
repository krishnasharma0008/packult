import React from 'react'

function Align({ children, alignment, padding }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: alignment,
                alignItems: "center",
                width: "100%",
                height: "max-content",
                padding: padding,
                border: "1px solid black",
            }}
        >
            {children}
        </div>
    )
}

export default Align