// src/components/Auth/Logout.jsx
import React from 'react';
import { logout } from './api';

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await logout();
      onLogout(); 
    } catch (error) {

    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;