import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Popup.module.css';
import { toast } from 'react-toastify';
import { addNewsletterSubscription } from '../../../lib/db-util';

const PopupOverlay = ({ closePopup }) => {
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
    <div className={styles['container']}>
      <button onClick={closePopup} className={styles['close-btn']}>
        X
      </button>
      <form className={styles['content']} onSubmit={registrationHandler}>
        <h1 className={styles['headline']}>GET 5% OFF</h1>
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
  );
};

const Popup = ({ closePopup }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <PopupOverlay closePopup={closePopup} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Popup;
