import Link from 'next/link';
import { useScrollPosition } from '../../hooks/useScrollPosition';

import styles from './navigation.module.scss';

import MenuIcon from '../menu-icon/menu-icon.component';

interface Props {
    navVisible: boolean,
    pathName: string,
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: React.FC<Props> = ({ navVisible, setNavVisible, pathName }) => {
    const scrollPosition = useScrollPosition();

    const linkClicked = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        const type = (e.target as HTMLLIElement).getAttribute('data-type');

        if (type === 'nav-link') {
            setNavVisible(false);
        }
    }

    return (
        <div className={`${styles['navigation']} ${scrollPosition > 0 ? styles['navigation-minimized'] : ''}`}>
            <button aria-label='menu' className={styles['nav-toggle']} onClick={() => setNavVisible(!navVisible)}>
                <MenuIcon clicked={navVisible} size={60} />
            </button>
            <div className={styles['nav-wrapper']}>
                <nav className={`${styles['nav']} ${navVisible ? `${styles['nav-visible']}` : ''}`} data-testid='nav'>
                    <ul className={styles['nav-list']} onClick={e => linkClicked(e)}>
                        <li>
                            <Link href='/' className={styles['nav-link']} data-path='/' data-type='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link href='/#projects' className={styles['nav-link']} data-path='/projects' data-type='nav-link'>Projects</Link>
                        </li>
                        <li>
                            <Link href='https://github.com/mikelee' className={styles['nav-link']} data-path='https://github.com/mikelee' data-type='nav-link'>Github</Link>
                        </li>
                        <li>
                            <Link href='/#contact' className={styles['nav-link']} data-path='/contact' data-type='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Navigation;