import Link from 'next/link';

import styles from '../styles/Nav.module.scss';

import CloseIcon from './close-icon.component';
import MenuIcon from './menu-icon.component';

interface Props {
    navVisible: boolean,
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav: React.FC<Props> = ({ navVisible, setNavVisible }) => (
    <div className={styles['navigation']}>
        <button className={`${styles['nav-toggle']} ${navVisible ? `${styles['invisible']}` : ''}`} onClick={() => setNavVisible(true)}>
            <MenuIcon size={60} />
        </button>
        <nav className={`${styles['nav']} ${navVisible ? `${styles['visible']}` : ''}`} data-testid='nav'>
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
    </div>
);
export default Nav;