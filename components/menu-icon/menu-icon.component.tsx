import styles from './menu-icon.module.scss';

interface Props {
    clicked: boolean,
    size: number
}

const MenuIcon: React.FC<Props> = ({ clicked, size }) => (
    <svg className={`${styles['menu-icon']} ${clicked ? styles['clicked'] : ''}`} width={size} viewBox="0 0 240 154" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_310_1084)">
            <rect id={styles['line-top']} y="94.71" width="240" height="12" rx="6" fill="white"/>
            <rect id={styles['line-bottom']} y="46.71" width="240" height="12" rx="6" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_i_310_1084" x="0" y="0" width="242" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_310_1084"/>
            </filter>
        </defs>
    </svg>
);

export default MenuIcon;