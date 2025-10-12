import React from 'react'

function NameInput({setName}) {
  return (
    <div>
        <input
        type='text'
        placeholder='Enter your Name......'
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"/>
    </div>
  )
}

export default NameInput