import React from 'react'

function Card({title, image, description}) {
  return (
    <div>
        <div style={{
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden", 
        width: "250px",
        margin: "1rem",
      }}>
            <img 
            src={image}
            alt={description}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <div style={{ padding: "1rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
      </div>

        </div>
    </div>
  )
}

export default Card;