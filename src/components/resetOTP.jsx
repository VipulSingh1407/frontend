import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PasswordResetOTPVerification = () => {
  const [otp, setOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      // Retrieve email from localStorage
      const email = localStorage.getItem('resetEmail');
      if (!email) {
        setError('No email found. Please request OTP again.');
        return;
      }

      // Verify OTP and reset password
      const response = await axios.post('https://auth-4sva.onrender.com/api/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);
      setError('');

      localStorage.removeItem('resetEmail'); // Clear saved email after reset
      navigate('/login'); // Redirect to login page after successful reset
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleVerifyOTP} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Verify OTP (Reset Password)</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Reset Password
        </button>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PasswordResetOTPVerification;
