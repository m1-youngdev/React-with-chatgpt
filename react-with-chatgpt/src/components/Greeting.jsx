import React from 'react'

function Greeting({name}) {
  return (
    <div>
        <p className="mt-4 text-lg text-gray-700">
      {name ? `Hello, ${name}! 👋` : "Type your name above!"}
    </p>
    </div>
  )
}

export default Greeting