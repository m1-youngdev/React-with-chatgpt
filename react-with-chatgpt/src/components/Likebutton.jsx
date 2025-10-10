import React from 'react'
import { useState } from 'react'

function Likebutton({title}) {
    
    const [likes, setLikes] = useState(0);
    const handleLikes = () => {setLikes(likes + 1)}

  return (
    <div>
    <div className="bg-white shadow-md rounded-lg p-4 m-3 w-80 text-center">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 mb-4">Likes: {likes}</p>
      <button
        onClick={handleLikes}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
      >
        Like ❤️
      </button>
    </div>

    </div>
  )
}

export default Likebutton