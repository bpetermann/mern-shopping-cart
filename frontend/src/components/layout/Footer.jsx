import styles from './Footer.module.css';
import Accordion from '../ui/Accordion';
import { SiTwitter, SiSpotify, SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <div className={styles['background']}>
      <div className={styles['container']}>
        <div className={styles['accordion-container']}>
          <Accordion color={'#fcfcfc'} backgroundColor={'#1a1a1a'} />
        </div>
        <div className={styles['icon-container']}>
          <SiTwitter size={36} style={{ color: '#fcfcfc' }} />
          <SiSpotify size={36} style={{ color: '#fcfcfc' }} />
          <SiFacebook size={36} style={{ color: '#fcfcfc' }} />
          <SiInstagram size={36} style={{ color: '#fcfcfc' }} />
        </div>
        <nav className={styles['navigation-container']}>
          <a href='https://github.com/bpetermann'>Privacy Policy</a>
          <a href='https://github.com/bpetermann'>Terms of Use</a>
          <a href='https://github.com/bpetermann'>Cookie Preferences</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
