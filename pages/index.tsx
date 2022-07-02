import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Mike Lee: Fullstack Developer</title>
                <meta name='description' content='Mike Lee is a FullStack Web Developer.' />
            </Head>
            <div className={styles['home']}>
                <main>
                    <h1 className={styles['name']}>Mike Lee</h1>
                    <p className={styles['text']}>FullStack Developer</p>
                    <div className={styles['buttons']}>
                        <Link href='/projects'><a className={styles['button']}>Projects</a></Link>
                        <Link href='/contact'><a className={styles['button']}>Get In Touch</a></Link>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home