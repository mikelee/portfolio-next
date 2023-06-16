import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import Mountains from '../components/mountains.component';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mike Lee: Full Stack Developer</title>
                <meta name='description' content='Mike Lee is a Full Stack Web Developer.' />
            </Head>
            <div className={styles['home']}>
                <main>
                    <h1 className={styles['name']}>Mike Lee</h1>
                    <p className={styles['text']}>Full Stack Developer</p>
                    <div className={styles['buttons']}>
                        <Link href='/projects'><a className={styles['button']}>Projects</a></Link>
                        <Link href='/contact'><a className={styles['button']}>Get In Touch</a></Link>
                    </div>
                </main>
                <Mountains />
            </div>
        </>
    );
}

export default Home;