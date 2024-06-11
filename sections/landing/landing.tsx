import Link from 'next/link';

import styles from './landing.module.scss';
import Mountains from '../../components/mountains/mountains.component';

const Landing = () => (
    <div className={styles['landing']}>
        <main>
            <h1 className={styles['name']}>Mike Lee</h1>
            <p className={styles['text']}>Full Stack Developer</p>
            <div className={styles['buttons']}>
                <Link href='/projects' className={styles['button']}>Projects</Link>
                <Link href='/contact' className={styles['button']}>Get In Touch</Link>
            </div>
        </main>
        <Mountains />
    </div>
);

export default Landing;