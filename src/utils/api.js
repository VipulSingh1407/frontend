import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://auth-4sva.onrender.com/api';

// Handle API requests
export const requestOTP = async (data) => {
  try {
    const response = await axios.post('/auth/register', data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || 'Error requesting OTP');
  }
};

export const verifyOTP = async (data) => {
  try {
    const response = await axios.post('/auth/verify-otp', data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || 'Error verifying OTP');
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post('/auth/login', data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || 'Login failed');
  }
};

export const requestPasswordResetOTP = async (data) => {
  try {
    const response = await axios.post('/auth/request-password-reset-otp', data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || 'Error requesting reset OTP');
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await axios.post('/auth/reset-password', data);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.error || 'Error resetting password');
  }
};
