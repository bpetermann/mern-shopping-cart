import styles from './SignIn.module.css';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const SignIn = ({
  signUpForm,
  setSignUpForm,
  setFormData,
  signIn,
  email,
  password,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signIn();
  };

  if (signUpForm) {
    return (
      <>
        <h2>Welcome back</h2>
        <button
          onClick={setSignUpForm}
          className={styles['enable-login-button']}
        >
          Sign In
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Welcome back</h2>
      <form className={styles['form']} onSubmit={onSubmit}>
        <input
          type='email'
          className={styles['emailInput']}
          placeholder='Email'
          id='email'
          value={email}
          onChange={onChangeHandler}
          required
        />

        <div className={styles['passwordInputDiv']}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            className={styles['passwordInput']}
            value={password}
            onChange={onChangeHandler}
            required
          />

          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={styles['showPassword']}
          />
        </div>

        <div className={styles['button-container']}>
          <button className={styles['login-button']}>Sign In</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
