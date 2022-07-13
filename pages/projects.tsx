import Head from 'next/head';
import Link from 'next/link';
import projectsData from '../projectsData';

import styles from '../styles/Projects.module.scss';

const Projects = () => (
    <>
        <Head>
            <title>Mike Lee: Projects</title>
            <meta name='description' content='Mike Lee developed several web apps using typescript, javascript, react, redux, firebase, sql, sass, css, html, etc.' />
        </Head>
        <main className={styles['projects']}>
            <h1 className={styles['title']}>Projects</h1>
            <div className={styles['projects-display']}>
                {
                    projectsData.map(project => (
                        <section key={project.id} className={styles['project']}>
                            <h2 className={styles['name']}>{project.name}</h2>
                            <div className={styles['project-info']}>
                                <div className={styles['image-wrapper']}>
                                    <div className={`${styles['image']} ${styles[`project-${project.id}`]}`} style={{backgroundImage: `url(${project.image})`}}>
                                    </div>
                                </div>
                            </div>
                            <Link href={project.url}><a className={styles['try-project-button']}>Try it out!</a></Link>
                        </section>
                    ))
                }
            </div>
        </main>
    </>
);

export default Projects;