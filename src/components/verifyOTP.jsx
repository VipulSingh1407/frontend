import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTPVerificationSignup = () => {
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      // Retrieve user details from localStorage
      const signupDetails = JSON.parse(localStorage.getItem('signupDetails'));
      if (!signupDetails) {
        setError('No signup details found. Please register again.');
        return;
      }

      const { username, email, password } = signupDetails;

      // Verify OTP and register user
      const response = await axios.post('https://auth-4sva.onrender.com/api/auth/verify-otp', {
        username,
        email,
        password,
        otp,
      });
      setMessage(response.data.message);
      setError('');
      localStorage.removeItem('signupDetails'); // Clear temporary data
      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleVerifyOTP} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Verify OTP (Signup)</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Verify OTP
        </button>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default OTPVerificationSignup;
