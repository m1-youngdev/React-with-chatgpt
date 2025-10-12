import React from "react";

function ProfileForm({ setName, setBio, setImage }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80 mb-6">
      <input
        type="text"
        placeholder="Enter Your Name...."
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Short bio..."
        onChange={(e) => setBio(e.target.value)}
        className="border border-gray-300 rounded w-full p-2 mb-3"
      />

      <input
        type="text"
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        className="border border-gray-300 rounded w-full p-2"
      />
    </div>
  );
}

export default ProfileForm;
