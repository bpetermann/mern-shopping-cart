import React, { useState, useEffect } from 'react';
import styles from './Newsletter.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { newsletterSubscription, reset } from '../../features/auth/authSlice';

const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [mfashion, setMFashion] = useState(false);
  const [wfashion, setWFashion] = useState(true);
  const dispatch = useDispatch();

  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const registrationHandler = (e) => {
    e.preventDefault();
    const interestedIn = { mfashion: mfashion, wfashion: wfashion };

    const subscriptionData = {
      email: enteredEmail,
      interests: interestedIn,
    };

    dispatch(newsletterSubscription(subscriptionData));
    setEnteredEmail('');
    setMFashion(false);
  };

  return (
    <div className={styles.container}>
      <h2>JOIN OUR NEWSLETTER!</h2>
      <div className={styles['form-container-wrapper']}>
        <form
          className={styles['form-container']}
          onSubmit={registrationHandler}
        >
          <input
            className={styles.emailadress}
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
          <h3>I&apos;m mostly interested in</h3>
          <div>
            <input
              type='checkbox'
              id='wfashion'
              name='wfashion'
              value='wfashion'
              checked={wfashion}
              onChange={(e) => setWFashion(e.target.checked)}
            />
            <label htmlFor='wfashion'>Women&apos;s Fahsion</label>
          </div>
          <div>
            <input
              type='checkbox'
              id='mfashion'
              name='mfashion'
              value='mfashion'
              checked={mfashion}
              onChange={(e) => setMFashion(e.target.checked)}
            />
            <label htmlFor='mfashion'>Men&apos;s Fashion</label>
          </div>
          <button type='submit' className={styles.button}>
            <AiOutlineMail size={22} className={styles['newsletter-icon']} />
            <span>Add my Email</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
