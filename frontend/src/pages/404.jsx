import styles from '../styles/404.module.css';
import { NavLink } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles['container']}>
        <GiRunningShoe size={60} />
        <h2 className={styles['not-found-text']}>
          Sorry, we can&apos;t find that page!
          <br /> You&apos;ll find loads to explore on the home page.
        </h2>
        <NavLink to='/' className={styles['homepage-link']}>
          Homepage
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundPage;
