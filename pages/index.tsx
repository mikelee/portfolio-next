import Head from 'next/head';

import type { NextPage } from 'next';

import styles from './home.module.scss';

import Landing from '../sections/landing/landing';
import Projects from '../sections/projects/projects';
import Contact from '../sections/contact/contact';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mike Lee | Full Stack Developer</title>
                <meta name='description' content='Mike Lee is a Full Stack Web Developer.' />
            </Head>
            <div className={styles['home']}>
                <Landing />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default Home;