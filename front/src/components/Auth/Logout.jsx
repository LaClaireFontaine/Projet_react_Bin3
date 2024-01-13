// src/components/Auth/Logout.jsx
import React, { useState } from 'react';
import api from './api';

const Logout = () => {
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await api.logout();
    } catch (error) {
      console.error('Logout error:', error.message);
      setError('Logout failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Logout;
