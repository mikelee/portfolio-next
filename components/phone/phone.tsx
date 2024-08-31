import styles from './phone.module.scss';

interface Props {
    imageURL?: string
}

const Phone: React.FC<Props> = ({ imageURL }) => (
    <svg className={styles['phone']} width="100%" viewBox="0 0 240 490" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.6001" width="236.8" height="490" rx="40" fill="black"/>
        {
            imageURL
            ? <image clipPath="url(#screen-clip)" preserveAspectRatio="xMidYMid slice" x="12" y="10.4004" width="216.4" height="469.2" rx="30.4" href={imageURL}/>
            : <rect id='screen' x="12" y="10.4004" width="216.4" height="469.2" rx="30.4" fill="white"/>
        }
        <path d="M83.2 473.6H157.6" stroke="black" strokeWidth="2.4" strokeLinecap="round"/>
        <rect x="238.4" y="155.2" width="1.6" height="58.4" fill="black"/>
        <rect x="240" y="213.2" width="1.6" height="1.6" transform="rotate(-180 240 213.2)" fill="url(#paint0_linear_371_949)"/>
        <rect x="238.4" y="156" width="1.6" height="1.6" fill="url(#paint1_linear_371_949)"/>
        <rect y="176.8" width="1.6" height="37.2" fill="black"/>
        <rect x="1.6001" y="213.2" width="1.6" height="2" transform="rotate(-180 1.6001 213.2)" fill="url(#paint2_linear_371_949)"/>
        <rect y="177.6" width="1.6" height="2" fill="url(#paint3_linear_371_949)"/>
        <rect y="129.6" width="1.6" height="37.2" fill="black"/>
        <rect x="1.6001" y="166.399" width="1.6" height="2" transform="rotate(-180 1.6001 166.399)" fill="url(#paint4_linear_371_949)"/>
        <rect y="130.399" width="1.6" height="2" fill="url(#paint5_linear_371_949)"/>
        <rect y="94.4004" width="1.6" height="18.4" fill="black"/>
        <rect x="1.6001" y="112.4" width="1.6" height="1.2" transform="rotate(-180 1.6001 112.4)" fill="url(#paint6_linear_371_949)"/>
        <rect y="94.8008" width="1.6" height="1.2" fill="url(#paint7_linear_371_949)"/>
        <defs>
            {/* used to clip the image to the shape of the screen */}
            <rect id='screen' x="12" y="10.4004" width="216.4" height="469.2" rx="30.4" fill="white"/>
            <clipPath id="screen-clip">
                <use xlinkHref="#screen"/>
            </clipPath>

            <linearGradient id="paint0_linear_371_949" x1="240.8" y1="213.2" x2="240.8" y2="214.8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint1_linear_371_949" x1="239.2" y1="156" x2="239.2" y2="157.6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint2_linear_371_949" x1="2.4001" y1="213.2" x2="2.4001" y2="215.2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint3_linear_371_949" x1="0.8" y1="177.6" x2="0.8" y2="179.6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint4_linear_371_949" x1="2.4001" y1="166.399" x2="2.4001" y2="168.399" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint5_linear_371_949" x1="0.8" y1="130.399" x2="0.8" y2="132.399" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint6_linear_371_949" x1="2.4001" y1="112.4" x2="2.4001" y2="113.6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
            <linearGradient id="paint7_linear_371_949" x1="0.8" y1="94.8008" x2="0.8" y2="96.0008" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCFCFC"/>
                <stop offset="1" stopColor="#969696"/>
            </linearGradient>
        </defs>
    </svg>
);

export default Phone;