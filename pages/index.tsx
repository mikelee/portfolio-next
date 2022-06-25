import type { NextPage } from 'next'
import Head from 'next/head'

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
                </main>
            </div>
        </>
    )
}

export default Home