import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Здесь вы можете добавить логику для регистрации пользователя
    // Если регистрация успешна, перенаправьте пользователя на страницу входа
    // Например, navigate('/login');
  };

  return (
    <div>
      <h3>Страница регистрации</h3>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
          <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="../Login">Войдите</Link>
      </p>
    </div>
  );
}

export default Registration;
