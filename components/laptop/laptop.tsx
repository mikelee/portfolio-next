interface Props {
    imageURL?: string
}

const Laptop: React.FC<Props> = ({ imageURL }) => (
    <svg width="100%" viewBox="0 0 1600 956" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
            imageURL
            ? <image preserveAspectRatio="xMidYMid slice" x="163" y="20" width="1274" height="828" href={imageURL}/>
            : <rect x="163" y="20" width="1274" height="828" fill="white"/>
        }
        <mask id="path-2-inside-1_384_1130" fill="white">
        <path d="M143 36C143 16.1178 159.118 0 179 0H1421C1440.88 0 1457 16.1178 1457 36V862H143V36Z"/>
        </mask>
        <path d="M123 36C123 5.07205 148.072 -20 179 -20H1421C1451.93 -20 1477 5.07205 1477 36H1437C1437 27.1634 1429.84 20 1421 20H179C170.163 20 163 27.1634 163 36H123ZM1477 876H123L163 848H1437L1477 876ZM123 876V36C123 5.07205 148.072 -20 179 -20V20C170.163 20 163 27.1634 163 36V848L123 876ZM1421 -20C1451.93 -20 1477 5.07205 1477 36V876L1437 848V36C1437 27.1634 1429.84 20 1421 20V-20Z" fill="black" mask="url(#path-2-inside-1_384_1130)"/>
        <path d="M143 862H1457V897H143V862Z" fill="#2F2F2F"/>
        <path d="M0 897H1600V928C1600 943.464 1587.46 956 1572 956H28C12.536 956 0 943.464 0 928V897Z" fill="#A8A8A8"/>
        <path d="M661 897H939V897C939 909.15 929.15 919 917 919H683C670.85 919 661 909.15 661 897V897Z" fill="#BDBDBD"/>
    </svg>
);

export default Laptop;