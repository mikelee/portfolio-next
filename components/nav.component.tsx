import Link from 'next/link';

import styles from '../styles/Nav.module.scss';

import CloseIcon from './close-icon.component';

interface Props {
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ setNavVisible }) => (
    <nav className={styles['nav']} data-testid='nav'>
        <button className={styles['close-button']} onClick={() => setNavVisible(false)}>
            <CloseIcon size={30} />
        </button>
        <ul className={styles['nav-list']}>
            <li>
                <Link href='/'><a className={styles['nav-link']}>Home</a></Link>
            </li>
            <li>
                <Link href='/projects'><a className={styles['nav-link']}>Projects</a></Link>
            </li>
            <li>
                <Link href='https://github.com/mikelee'><a className={styles['nav-link']}>Github</a></Link>
            </li>
            <li>
                <Link href='/contact'><a className={styles['nav-link']}>Contact</a></Link>
            </li>
        </ul>
    </nav>
);

export default Nav;