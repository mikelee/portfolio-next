import Head from 'next/head';
import Link from 'next/link';
import projectsData from '../projectsData';

import styles from '../styles/Projects.module.scss';

const Projects = () => (
    <>
        <Head>
            <title>Mike Lee: Work</title>
            <meta name='description' content='Mike Lee developed several web apps using typescript, javascript, react, redux, firebase, sql, sass, css, html, etc.' />
        </Head>
        <main className={styles['projects']}>
            <h1 className={styles['title']}>Projects</h1>
            {
                projectsData.map(project => (
                    <section key={project.id} className={styles['project']}>
                        <h2 className={styles['name']}>{project.name}</h2>
                        <div className={styles['image']} style={{backgroundImage: `url(${project.image})`}}></div>
                        <Link href={project.url}><a className={styles['try-project-button']}>Try it out!</a></Link>
                    </section>
                ))
            }
        </main>
    </>
);

export default Projects;