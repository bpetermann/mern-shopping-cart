import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { BsFillTriangleFill, BsFillPersonFill } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  return (
    <header className={styles['container']}>
      <NavLink to='/' className={styles['products-NavLink']}>
        <BsFillTriangleFill size={20} className={styles['logo-icon']} />
        shopping cart
      </NavLink>
      <div className={styles['nav-container']}>
        <NavLink to='/auth'>
          <IconButton>
            <BsFillPersonFill size={24} className={styles['auth-user-icon']} />
          </IconButton>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
