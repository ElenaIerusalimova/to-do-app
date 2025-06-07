import React, { useState } from 'react';
import styles from './Entrance.module.css'; 

const Entrance = () => { 
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const toggleMode = () => {
    setIsLoginMode(prevMode => !prevMode);
    setEmailOrPhone('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка формы:', { emailOrPhone, password, mode: isLoginMode ? 'Вход' : 'Регистрация' });
  };

  return (
    <div className={styles.entranceContainer}> 
      <h1 className={styles.entranceTitle}>
        {isLoginMode ? 'Вход' : 'Регистрация'}
      </h1>
      <form onSubmit={handleSubmit} className={styles.entranceForm}>
        <input
          type="text"
          placeholder="Телефон или Email"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className={styles.entranceInput}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.entranceInput}
        />
        <button type="submit" className={styles.entranceButton}>
          {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
      <button onClick={toggleMode} className={styles.toggleModeButton}>
        {isLoginMode
          ? 'У меня еще нет аккаунта'
          : 'У меня уже есть аккаунт'}
      </button>
    </div>
  );
};

export default Entrance;