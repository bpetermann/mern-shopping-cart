import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, login, reset, logout } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const showSignUpFormHandler = () => {
    setShowSignUpForm((prevState) => !prevState);
  };

  const signUpHandler = () => {
    const userData = {
      email,
      password,
    };
    dispatch(register(userData));
  };

  const signInHandler = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={styles['form-container']}>
      {user && (
        <>
          <h2>Until next time</h2>
          <button className={styles['logout-button']} onClick={logoutHandler}>
            Logout
          </button>
        </>
      )}
      {!user && (
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
      )}
    </div>
  );
};

export default AuthForm;
