import Link from 'next/link';

import styles from './landing.module.scss';
import Stars from '../../components/stars/stars';

const Landing = () => (
    <div className={styles['landing-wrapper']}>
        <div className={styles['landing']}>
            <div className={styles['svg-container']}>
                <Stars />
            </div>
            <main>
                <h1 className={styles['name']}>Mike Lee</h1>
                <p className={styles['occupation']}>Full Stack Developer</p>
                <Link href='/#contact' className={styles['button']}>Get In Touch</Link>
            </main>
        </div>
    </div>
);

export default Landing;