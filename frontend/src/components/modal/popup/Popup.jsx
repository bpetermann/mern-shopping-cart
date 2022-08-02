import { useState } from 'react';
import styles from './Popup.module.css';
import { toast } from 'react-toastify';
import { addNewsletterSubscription } from '../../../lib/db-util';

const Popup = ({ closePopup }) => {
  const [enteredEmail, setEnteredEmail] = useState('');

  const registrationHandler = async (e) => {
    e.preventDefault();
    const interests = { mfashion: true, wfashion: true };

    try {
      const result = await addNewsletterSubscription(enteredEmail, interests);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
    closePopup();
  };

  return (
    <>
      <div className={styles['container']}>
        <button onClick={closePopup} className={styles['close-btn']}>
          X
        </button>
        <form className={styles['content']} onSubmit={registrationHandler}>
          <h1 className={styles['headline']}>Get 5% Off</h1>
          <span className={styles['info']}>YOUR FIRST PURCHASE</span>
          <h3>Subscribe to get started!</h3>
          <input
            className={styles['emailadress']}
            type='email'
            id='email'
            name='email'
            placeholder='Your Email'
            onChange={(e) => setEnteredEmail(e.target.value)}
          />
          <button type='submit' className={styles.button}>
            Get Started Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Popup;
