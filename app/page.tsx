import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import Mountains from '../components/mountains.component';

// This page's metadata is the default metadata in ./layout.tsx (root  layout)

const Home: NextPage = () => {
    return (
        <div className={styles['home']}>
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
}

export default Home;