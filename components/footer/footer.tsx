import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => (
    <div className={styles['footer']}>
        <p>© 2026 Mike Lee Web Design</p>
        <Link className={styles['privacyLink']} href='/privacy-policy'>Privacy Policy</Link>
    </div>
);

export default Footer;