import React from 'react'

function ProfileCard({name, bio, image}) {

  return (
    <div className="bg-green-200 shadow-lg rounded-lg p-6 w-80 text-center">
        {image ? (
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      <h2 className="text-lg font-semibold text-green-600">{name || "Your Name"}</h2>
      <p className="text-gray-600 mt-2 ">{bio || "Write something about yourself..."}</p>
    </div>
  )
}

export default ProfileCard