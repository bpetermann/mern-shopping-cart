import styles from './SignUp.module.css';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const SignUp = ({
  signUpForm,
  setSignUpForm,
  setFormData,
  signUp,
  email,
  password,
  confirmPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    specialChars: false,
    passwordTouched: false,
  });
  const [confirmPasswordTouched, setConfirmPasswordIsTouched] = useState(false);

  const { length, specialChars, passwordTouched } = passwordValidation;

  const passwordIsValid = Object.values(passwordValidation).every(
    (value) => value === true
  );
  const confirmPasswordIsValid = password === confirmPassword ? true : false;
  const passwordIsInavlid = !passwordIsValid && passwordTouched;
  const confirmPasswordIsInvalid =
    !confirmPasswordIsValid && confirmPasswordTouched;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!passwordIsValid || !confirmPasswordIsValid) {
      return;
    }
    signUp();
  };

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // eslint-disable-next-line
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const passwordInputBlurHandler = (e) => {
    e.preventDefault();
    setPasswordValidation({
      passwordTouched: true,
      length: e.target.value.trim().length >= 6,
      specialChars: format.test(e.target.value),
    });
  };

  const confirmPasswordBlurHandler = (event) => {
    event.preventDefault();
    setConfirmPasswordIsTouched(true);
  };

  if (!signUpForm) {
    return (
      <>
        <h2>I&apos;m new here</h2>
        <button
          onClick={setSignUpForm}
          className={styles['enable-signup-button']}
        >
          Sign Up
        </button>
      </>
    );
  }

  return (
    <>
      <h2>I&apos;m new here</h2>
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
            value={password}
            onChange={onChangeHandler}
            onBlur={passwordInputBlurHandler}
            className={
              !passwordIsInavlid
                ? styles['passwordInput']
                : `${styles['passwordInput']} ${styles['invalid']}`
            }
            required
          />

          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={styles['showPassword']}
          />
        </div>
        <p className={styles['password-info']}>
          Create a password that is at least 6 characters long and includes 1
          special character
        </p>
        {passwordIsInavlid && !length && (
          <p className={styles['invalid-message']}>
            *Your password must be at least 6 characters long
          </p>
        )}

        {passwordIsInavlid && !specialChars && (
          <p className={styles['invalid-message']}>
            *Your password must contain at least 1 special character
          </p>
        )}

        <div className={styles['passwordInputDiv']}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={onChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            className={
              !confirmPasswordIsInvalid
                ? styles['passwordInput']
                : `${styles['passwordInput']} ${styles['invalid']}`
            }
            required
          />
          <AiOutlineEye
            onClick={() => setShowPassword((prevState) => !prevState)}
            size={32}
            className={styles['showPassword']}
          />
        </div>
        {confirmPasswordIsInvalid && (
          <p className={styles['invalid-message']}>*Passwords do not match</p>
        )}

        <div className={styles['button-container']}>
          <button className={styles['signup-button']}>Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
