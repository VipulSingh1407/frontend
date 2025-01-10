import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });

      if (response.data.user) {
        toast.success('Login successful!');
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user details
        navigate('/logged-in'); // Redirect to logged-in page
      } else {
        toast.error('Login failed. User details are missing.');
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register Now
            </Link>
          </p>
          <p className="text-gray-700 mt-2">
            <Link to="/reset-password" className="text-red-500 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
