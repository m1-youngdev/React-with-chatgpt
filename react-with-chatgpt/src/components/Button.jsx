import React from 'react'

function Button({text, }) {
  return (
    <div>
        <button style={{
      padding: "10px 20px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "5px",
      marginTop: "10px",
      cursor: "pointer"
    }}>
        {text}
        </button>
    </div>
  )
}

export default Button;