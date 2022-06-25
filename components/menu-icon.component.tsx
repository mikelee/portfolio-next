interface Props {
    size: number
}

const MenuIcon: React.FC<Props> = ({ size }) => (
    <svg width={size} height={size / 2} viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_102_8)">
            <rect x="7" y="6" width="146" height="6" rx="3" fill="white"/>
        </g>
        <g filter="url(#filter1_d_102_8)">
            <rect x="33" y="36" width="120" height="6" rx="3" fill="white"/>
        </g>
        <g filter="url(#filter2_d_102_8)">
            <rect x="7" y="66" width="146" height="6" rx="3" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_d_102_8" x="0" y="0" width="160" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_102_8"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_8"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_8" result="shape"/>
            </filter>
            <filter id="filter1_d_102_8" x="26" y="30" width="134" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_102_8"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_8"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_8" result="shape"/>
            </filter>
            <filter id="filter2_d_102_8" x="0" y="60" width="160" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_102_8"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_8"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_8" result="shape"/>
            </filter>
        </defs>
    </svg>
);

export default MenuIcon;