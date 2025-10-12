import React from "react";
import { useState } from "react";

function UserDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome back, Marshal! 👋
          </h2>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Please log in to continue 🔐
          </h2>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
