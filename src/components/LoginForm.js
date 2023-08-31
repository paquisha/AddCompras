// LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState(null); // Estado para el token

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
      const token = 'bancoGuayaquilTest'; // Generación del token
      setAccessToken(token);
      handleLogin(username, token);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='pt-2'>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default LoginForm;
