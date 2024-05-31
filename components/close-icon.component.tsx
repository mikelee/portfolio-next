import styles from '../components/navigation/Navigation.module.scss';

interface Props {
    size: number
}

const CloseIcon: React.FC<Props> = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={styles['close-icon--path']} fillRule="evenodd" clipRule="evenodd" d="M7.97057 7.97058C-1.40202 17.3431 -1.40202 32.5391 7.97057 41.9117L51.4576 85.3987L7.97057 128.886C-1.40202 138.258 -1.40202 153.454 7.97057 162.827C17.3431 172.2 32.5391 172.2 41.9117 162.827L85.3988 119.34L128.886 162.827C138.258 172.2 153.454 172.2 162.827 162.827C172.2 153.454 172.2 138.258 162.827 128.886L119.34 85.3988L162.827 41.9117C172.2 32.5391 172.2 17.3431 162.827 7.97055C153.454 -1.40201 138.258 -1.40201 128.886 7.97055L85.3988 51.4576L41.9117 7.97058C32.5391 -1.40201 17.3431 -1.40201 7.97057 7.97058Z" fill="#44484d"/>
    </svg>
);

export default CloseIcon;