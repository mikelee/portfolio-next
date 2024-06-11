import React, { useEffect, useState } from 'react';

import styles from './mountains.module.scss';

const Mountains: React.FC = () => {
    const [colorScheme, setColorScheme] = useState<'dark' | 'light' | null>(null);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDark) {
            setColorScheme('dark');
        } else {
            setColorScheme('light');
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                const newColorScheme = event.matches ? 'dark' : 'light';
            
                setColorScheme(newColorScheme);
            });            
    }, []);

    return (
        <svg className={styles['mountains']} width="125%" viewBox="0 0 1169 664" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                colorScheme === 'dark' &&
                <>
                        <path className={styles['back']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1167.58C1167.92 651.535 1167.17 639.157 1166.39 626.324V626.323C1165.71 614.995 1165 603.313 1165 590.903C1165 543.79 1137.5 498 1114.5 465.5C1104.92 451.966 1087.45 462.424 1063.53 476.739C1030.01 496.799 983.833 524.433 929 504.234C867.465 481.566 802.144 505.302 747.341 525.217C704.848 540.659 668.678 553.802 645.5 541.234C628.831 532.195 613.123 522.666 597.45 513.158L597.45 513.158L597.449 513.157C530.525 472.558 464.242 432.348 326.5 432.348C271.911 432.348 193.827 350.939 129.747 284.13C95.092 247.999 64.5328 216.138 44 203.733C26.1796 192.967 12.3171 196.299 0 205.396V664Z" fill="#FFB6B6"/>
                        <path className={styles['middle']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1168.57C1168.68 656.328 1168.39 648.415 1168.08 640.123C1167.8 632.443 1167.5 624.438 1167.5 616C1167.5 572.07 1159.23 545.98 1127.5 559C1118.71 562.608 1109.69 566.739 1100.35 571.013C1048.89 594.58 987.903 622.51 903 591.234C827.343 563.364 742.127 507.036 679.25 465.473C651.332 447.019 627.818 431.477 611.5 422.628C562.811 396.226 512.316 423.237 457.492 452.563C413.399 476.149 366.506 501.233 315.5 501.233C268.041 501.233 219.219 450.294 173.917 403.025C138.93 366.521 106.042 332.205 77.5 325.233C54.0148 319.497 26.467 333.902 0 351.822V664Z" fill="#FF7070"/>
                        <path className={styles['front']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1168.85C1168.86 660.201 1168.77 656.445 1168.68 652.722V652.721V652.718V652.716V652.713V652.711C1168.59 649.113 1168.5 645.545 1168.5 642C1168.5 629.393 1145.45 626.481 1121.36 623.437C1099.87 620.721 1077.54 617.901 1070 608C1041.45 570.53 1029.66 573.947 986.414 586.483C970.701 591.038 950.833 596.796 924.5 602.235C917.953 603.587 910.768 605.289 903.091 607.107C863.284 616.536 810.267 629.094 764.501 612.235C760.368 610.712 756.011 609.079 751.445 607.368L751.443 607.367C695.389 586.359 607.957 553.59 521.5 570.234C489.526 576.389 461.205 584.85 436.029 592.372C387.582 606.845 350.779 617.84 322 602.235C304.013 592.481 283.687 587.076 263.319 581.659C224.61 571.365 185.748 561.03 162.5 520.734C148.153 495.866 138.888 493.157 116.299 486.551C103.462 482.798 86.3215 477.786 61.5 466.734C33.0867 454.083 15.5127 456.961 0 466.428V664Z" fill="#D94A4A"/>
                        <circle cx="160" cy="212" r="3" fill="#F2F2F2" fillOpacity="0.9"/>
                        <circle cx="896" cy="255" r="1.5" fill="#F2F2F2" fillOpacity="0.9"/>
                        <circle cx="57.5" cy="121.5" r="2" fill="#F2F2F2" fillOpacity="0.6"/>
                        <circle cx="787.5" cy="152.5" r="1.5" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="475.5" cy="104.5" r="1.5" fill="#F2F2F2" fillOpacity="0.5"/>
                        <circle cx="713" cy="231" r="3" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="611" cy="142" r="1.5" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="1024.5" cy="353.5" r="1.5" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="588.5" cy="273.5" r="1.5" fill="#F2F2F2" fillOpacity="0.5"/>
                        <circle cx="425.5" cy="231.5" r="2.51" fill="#F2F2F2" fillOpacity="0.5"/>
                        <circle cx="338.5" cy="54.5" r="2.1" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="1000.5" cy="137.5" r="2.1" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="804" cy="79" r="3" fill="#F2F2F2" fillOpacity="0.75"/>
                        <circle cx="284.5" cy="294.5" r="2.1" fill="#F2F2F2" fillOpacity="0.55"/>
                        <circle cx="760.5" cy="364.5" r="2.1" fill="#F2F2F2" fillOpacity="0.8"/>
                        <circle cx="505.5" cy="351.5" r="1.5" fill="#F2F2F2" fillOpacity="0.55"/>
                        <circle cx="311.5" cy="195.5" r="1.5" fill="#F2F2F2" fillOpacity="0.55"/>
                        <circle cx="199.5" cy="95.5" r="3" fill="#F2F2F2" fillOpacity="0.55"/>
                        <circle cx="868.5" cy="455.5" r="2.1" fill="#F2F2F2" fillOpacity="0.55"/>
                        <line className={`${styles['shooting-star']} ${styles['first']}`} x1="752.75" y1="257.368" x2="925.955" y2="157.368" stroke="white"/>
                        <line className={`${styles['shooting-star']} ${styles['second']}`} x1="237.148" y1="222.855" x2="131.082" y2="116.789" stroke="white"/>
                        <line className={`${styles['shooting-star']} ${styles['third']}`} x1="363.607" y1="262.334" x2="309.394" y2="131.034" stroke="white"/>
                    </>
            }
            {
                colorScheme === 'light' &&
                    <>
                        <path className={styles['back']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1167.58C1167.92 651.535 1167.17 639.157 1166.39 626.324V626.323C1165.71 614.995 1165 603.313 1165 590.903C1165 543.79 1137.5 498 1114.5 465.5C1104.92 451.966 1087.45 462.424 1063.53 476.739C1030.01 496.799 983.833 524.433 929 504.234C867.465 481.566 802.144 505.302 747.341 525.217C704.848 540.659 668.678 553.802 645.5 541.234C628.831 532.195 613.123 522.666 597.45 513.158L597.45 513.158L597.449 513.157C530.525 472.558 464.242 432.348 326.5 432.348C271.911 432.348 193.827 350.939 129.747 284.13C95.092 247.999 64.5328 216.138 44 203.733C26.1796 192.967 12.3171 196.299 0 205.396V664Z" fill="#FFB6B6"/>
                        <path className={styles['cloud-middle']} d="M563.131 419.678C583.328 423.233 598.588 422.111 618.785 419.678C628.59 418.497 656.71 414.44 663.605 419.678C670.5 424.916 711.5 415.476 722 428.476C732.5 441.476 698.472 459.05 683.218 449.992C667.965 440.933 618.785 442.547 607 436.047C595.215 429.547 507.596 443.194 498.951 428.476C490.306 413.758 542.935 416.123 563.131 419.678Z" fill="#FFFFFF"/>
                        <path className={styles['cloud-back']} d="M1065.5 463.5C1087.99 464.776 1134.21 471.117 1142.05 475.31C1149.88 479.502 1132.03 482.237 1125.87 488.343C1119.72 494.449 1076 484.343 1070 488.343C1064 492.343 1041.95 492.946 1023.5 496.5C1005.05 500.055 985.5 492 991 481C996.5 470 1026.3 472.462 1038.17 474.832C1050.05 477.201 1043.01 462.224 1065.5 463.5Z" fill="#FFFFFF"/>
                        <path className={styles['cloud-middle']} d="M105.279 342.172C73.408 344.184 31.8689 346.915 20.768 353.526C9.66702 360.138 34.9623 364.45 43.6863 374.079C52.4104 383.708 78.1928 378.774 83.2062 373.313C88.2195 367.851 160.802 376.305 186.943 381.911C213.084 387.516 282.3 370.09 262.482 361.431C242.665 352.772 184.805 349.036 167.974 352.772C151.144 356.509 137.149 340.16 105.279 342.172Z" fill="#FFFFFF"/>
                        <path className={styles['middle']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1168.57C1168.68 656.328 1168.39 648.415 1168.08 640.123C1167.8 632.443 1167.5 624.438 1167.5 616C1167.5 572.07 1159.23 545.98 1127.5 559C1118.71 562.608 1109.69 566.739 1100.35 571.013C1048.89 594.58 987.903 622.51 903 591.234C827.343 563.364 742.127 507.036 679.25 465.473C651.332 447.019 627.818 431.477 611.5 422.628C562.811 396.226 512.316 423.237 457.492 452.563C413.399 476.149 366.506 501.233 315.5 501.233C268.041 501.233 219.219 450.294 173.917 403.025C138.93 366.521 106.042 332.205 77.5 325.233C54.0148 319.497 26.467 333.902 0 351.822V664Z" fill="#FF7070"/>
                        <path className={styles['cloud-middle']} d="M553.185 440.109C584.156 441.385 624.523 443.117 635.31 447.309C646.098 451.502 621.517 454.236 613.039 460.343C604.561 466.449 579.506 463.32 574.634 459.857C569.763 456.393 499.228 461.755 473.825 465.309C448.422 468.864 381.16 457.813 400.418 452.322C419.677 446.831 475.904 444.462 492.259 446.831C508.614 449.201 522.214 438.833 553.185 440.109Z" fill="#FFFFFF"/>
                        <path className={styles['front']} fillRule="evenodd" clipRule="evenodd" d="M0 664H1168.85C1168.86 660.201 1168.77 656.445 1168.68 652.722V652.721V652.718V652.716V652.713V652.711C1168.59 649.113 1168.5 645.545 1168.5 642C1168.5 629.393 1145.45 626.481 1121.36 623.437C1099.87 620.721 1077.54 617.901 1070 608C1041.45 570.53 1029.66 573.947 986.414 586.483C970.701 591.038 950.833 596.796 924.5 602.235C917.953 603.587 910.768 605.289 903.091 607.107C863.284 616.536 810.267 629.094 764.501 612.235C760.368 610.712 756.011 609.079 751.445 607.368L751.443 607.367C695.389 586.359 607.957 553.59 521.5 570.234C489.526 576.389 461.205 584.85 436.029 592.372C387.582 606.845 350.779 617.84 322 602.235C304.013 592.481 283.687 587.076 263.319 581.659C224.61 571.365 185.748 561.03 162.5 520.734C148.153 495.866 138.888 493.157 116.299 486.551C103.462 482.798 86.3215 477.786 61.5 466.734C33.0867 454.083 15.5127 456.961 0 466.428V664Z" fill="#D94A4A"/>
                        <path className={styles['cloud-middle']} fillRule="evenodd" clipRule="evenodd" d="M6.10352e-05 422.143C31.0382 418.865 63.2106 416.948 66.6688 420.313C72.2821 425.774 101.15 430.708 110.918 421.079C114.83 417.222 121.718 414.219 127.773 411.579C136.836 407.627 144.03 404.49 136.579 400.526C124.15 393.915 77.6395 391.184 41.955 389.172C23.8122 388.149 10.8431 391.873 6.10352e-05 395.289V422.143Z" fill="#FFFFFF"/>
                        <path className={styles['cloud-back']} fillRule="evenodd" clipRule="evenodd" d="M0 279.922C26.0373 280.808 63.5192 273.945 66.8237 268.301C71.6536 260.051 123.057 256.795 148.241 265.262C173.426 273.729 204.82 263.526 186.535 253.757C168.251 243.987 112.707 218.153 96.4929 223.797C87.9899 226.757 79.9613 226.016 69.82 225.08C60.6225 224.231 49.6873 223.221 35.0845 224.667C23.9978 225.764 11.6966 227.003 0 228.608V279.922Z" fill="#FFFFFF"/>
                    </>
            }
        </svg>
    );
}

export default Mountains;