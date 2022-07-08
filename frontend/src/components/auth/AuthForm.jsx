import { useState } from 'react';
import styles from './AuthForm.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthForm = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password, confirmPassword } = formData;

  const showSignUpFormHandler = () => {
    setShowSignUpForm((prevState) => !prevState);
  };

  const signUpHandler = () => {
    console.log(formData);
  };

  const signInHandler = () => {
    console.log(formData);
  };

  return (
    <div className={styles['form-container']}>
      <>
        <SignIn
          signUpForm={showSignUpForm}
          setSignUpForm={showSignUpFormHandler}
          email={email}
          password={password}
          setFormData={setFormData}
          signIn={signInHandler}
        />
        <div className={styles['signup-border']}></div>
        <SignUp
          signUpForm={showSignUpForm}
          setSignUpForm={showSignUpFormHandler}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setFormData={setFormData}
          signUp={signUpHandler}
        />
      </>
    </div>
  );
};

export default AuthForm;
