import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}'); // Handle empty localStorage gracefully

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user details
    navigate('/login'); // Redirect to login page
  };

  if (!user || !user.username || !user.email) {
    // Redirect to login if user details are missing
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-bold">Unauthorized. Please log in.</p>
        <button
          onClick={() => navigate('/login')}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Hey, You are Logged In!</h2>
        <p className="mb-2">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>
        <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoggedIn;
