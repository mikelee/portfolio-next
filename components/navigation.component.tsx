import Link from 'next/link';

import styles from '../styles/Navigation.module.scss';

import CloseIcon from './close-icon.component';
import MenuIcon from './menu-icon.component';

interface Props {
    navVisible: boolean,
    setNavVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Navigation: React.FC<Props> = ({ navVisible, setNavVisible }) => (
    <div className={styles['navigation']}>
        <button className={`${styles['nav-toggle']} ${navVisible ? `${styles['nav-invisible']}` : ''}`} onClick={() => setNavVisible(true)}>
            <MenuIcon size={60} />
        </button>
        <nav className={`${styles['nav']} ${navVisible ? `${styles['nav-visible']}` : ''}`} data-testid='nav'>
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
            <svg className={styles['mountains-nav']} width="100%" viewBox="0 -12 1166 577" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles['back']} fillRule="evenodd" clipRule="evenodd" d="M1166 154.967C1151.44 135.128 1142.17 143.221 1127.42 156.093C1108.78 172.364 1081.38 196.272 1023.5 181.068C958.144 163.9 921.879 125.317 896.694 98.5236C873.82 74.1882 860.087 59.5774 842 79.5676C752.569 178.413 664.5 220.443 524.5 125.068C476.928 92.6593 424.76 125.384 383.764 151.1C355.819 168.63 333.066 182.903 320.5 171.068C302.04 153.681 281.499 131.848 260.616 109.651C201.49 46.8059 139.626 -18.9496 114.5 5.0677C77.1213 40.7975 37.6038 56.307 0 62.9331V459.279C78.4583 514.798 177.186 552.659 286.277 565H1166V154.967Z" fill="#FFB6B6"/>
                <path className={styles['middle']} fillRule="evenodd" clipRule="evenodd" d="M1141.22 259.679C1150.42 272.643 1158.86 284.529 1166 293.76V565H0V246.115C23.3003 246.553 47.6968 243.926 72.5002 235.568C91.7827 229.07 129.674 205.757 167.501 182.483C203.663 160.234 239.766 138.021 259.5 130.568C296.479 116.6 328.39 148.424 362.303 182.246C393.693 213.551 426.8 246.568 467.231 246.568C522.902 246.568 558.351 203.928 590.195 165.625C623.802 125.201 653.393 89.6081 698.5 114.068C717.464 124.351 734.845 139.064 754.338 155.565C789.398 185.243 831.288 220.704 901.5 246.568C938.451 260.18 967.671 223.091 992.69 191.334C1010.9 168.223 1026.88 147.935 1042 152.068C1070.35 159.816 1110.15 215.897 1141.22 259.675L1141.22 259.679Z" fill="#FF7070"/>
                <path className={styles['front']} fillRule="evenodd" clipRule="evenodd" d="M1152.5 368.5C1157.15 366.907 1161.64 365.52 1166 364.323V565H0V306.361C23.0491 301.105 44.9038 289.605 64.2307 268.568C104.3 224.952 195.167 273.07 274.59 315.128L274.594 315.131L274.602 315.135C307.166 332.378 337.805 348.603 362.231 357.068C446.231 386.177 692 368.958 760.5 313.068C773.707 302.292 784.024 292.651 792.857 284.397C829.839 249.839 840.815 239.582 929 272.068C957.127 282.429 979.306 302.425 1001.23 322.194C1041.09 358.129 1080.11 393.311 1152.5 368.5Z" fill="#D94A4A"/>
            </svg>
        </nav>
    </div>
);
export default Navigation;