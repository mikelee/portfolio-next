import styles from './stars.module.scss';

const Stars = () => (
    <svg className={styles['stars']} width="100%" viewBox="0 0 1003 438" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="121" cy="176" r="4" fill="#F2F2F2" fill-opacity="0.9"/>
        <circle cx="857" cy="219" r="4" fill="#F2F2F2" fill-opacity="0.9"/>
        <circle cx="18.5" cy="85.5" r="2.5" fill="#F2F2F2" fill-opacity="0.6"/>
        <circle cx="436.5" cy="68.5" r="1.5" fill="#F2F2F2" fill-opacity="0.5"/>
        <circle cx="674" cy="195" r="3" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="572" cy="106" r="2" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="748.5" cy="116.5" r="1.5" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="985.5" cy="317.5" r="1.5" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="549.5" cy="237.5" r="1.5" fill="#F2F2F2" fill-opacity="0.5"/>
        <circle cx="386.5" cy="195.5" r="3.5" fill="#F2F2F2" fill-opacity="0.5"/>
        <circle cx="299.5" cy="18.5" r="2.5" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="961.5" cy="101.5" r="2.5" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="765" cy="43" r="4" fill="#F2F2F2" fill-opacity="0.75"/>
        <circle cx="245.5" cy="258.5" r="2.5" fill="#F2F2F2" fill-opacity="0.55"/>
        <circle cx="721.5" cy="328.5" r="2.5" fill="#F2F2F2" fill-opacity="0.8"/>
        <circle cx="466.5" cy="315.5" r="1.5" fill="#F2F2F2" fill-opacity="0.55"/>
        <circle cx="272.5" cy="159.5" r="1.5" fill="#F2F2F2" fill-opacity="0.55"/>
        <circle cx="160.5" cy="59.5" r="1.5" fill="#F2F2F2" fill-opacity="0.55"/>
        <circle cx="829.5" cy="419.5" r="2.5" fill="#F2F2F2" fill-opacity="0.55"/>
        <line className={`${styles['shooting-star']} ${styles['first']}`} x1="713.75" y1="221.368" x2="886.955" y2="121.368" stroke="white"/>
        <line className={`${styles['shooting-star']} ${styles['second']}`} x1="198.148" y1="186.855" x2="92.0818" y2="80.789" stroke="white"/>
        <line className={`${styles['shooting-star']} ${styles['third']}`} x1="443.735" y1="203.424" x2="270.379" y2="95.0248" stroke="white"/>
    </svg>
);

export default Stars;