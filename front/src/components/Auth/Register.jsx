// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { register } from './api';

const Register = ({ onSuccess }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
      try {
        await register({ username, password });
        setSuccessMessage('Registration successful! You can now login.');
      } catch (error) {

        setSuccessMessage('Registration failed. Please try again.');
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        <p>{successMessage}</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;