import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/home';
import Register from './components/requestOTP';
import verifyOTP from './components/verifyOTP';
import Login from './components/login';
import PasswordResetRequest from './components/resetRequest';
import PasswordResetOTPVerification from './components/resetOTP';
import LoggedIn from './components/loggedin';

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-signup-otp" element={<verifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<PasswordResetRequest />} />
        <Route path="/verify-reset-otp" element={<PasswordResetOTPVerification />} />
        <Route path="/logged-in" element={<LoggedIn />} />
      </Routes>
    </Router>
  );
};

export default App;
