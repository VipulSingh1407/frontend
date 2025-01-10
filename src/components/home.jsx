import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Welcome</h1>
        <div className="flex flex-col gap-y-6">
          <Link to="/register">
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 shadow-md hover:shadow-lg transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to="/reset-password">
            <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300">
              Forgot Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
