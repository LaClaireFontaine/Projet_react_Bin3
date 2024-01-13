// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { login } from './api';

const Login = ({ onLogin, onSuccess }) => {
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const userData = await login({ username, password });
        onLogin(userData);
        setSuccessMessage('Login successful!');
      } catch (error) {

        setSuccessMessage('Login failed. Please check your credentials.');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
