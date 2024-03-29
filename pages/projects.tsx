import Head from 'next/head';
import Link from 'next/link';
import projectsData from '../projectsData';

import styles from '../styles/Projects.module.scss';

const Projects = () => (
    <>
        <Head>
            <title>Mike Lee | Projects</title>
            <meta name='description' content='Mike Lee developed several web apps using TypeScript, JavaScript, React, Redux, Firebase, SQL, SASS, CSS, HTML, etc.' />
        </Head>
        <main className={styles['projects']}>
            <h1 className={styles['title']}>Projects</h1>
            <div className={styles['projects-display']}>
                {
                    projectsData.map(project => (
                        <section key={project.id} className={styles['project']}>
                            <div className={styles['name-container']}>
                                <h2 className={styles['name']}>{project.name}</h2>
                            </div>
                            <div className={styles['project-info']}>
                                <div className={styles['image-wrapper']}>
                                    <div className={`${styles['image']} ${styles[`project-${project.id}`]}`} style={{backgroundImage: `url(${project.image})`}}></div>
                                    <video
                                        src={project.video}
                                        onMouseEnter={e => (e.target as HTMLVideoElement).play()}
                                        onMouseOut={e => (e.target as HTMLVideoElement).pause()}
                                        loop
                                        muted >
                                    </video>
                                </div>
                            </div>
                            <Link href={project.url} className={styles['try-project-button']}>Try it out!</Link>
                        </section>
                    ))
                }
            </div>
        </main>
    </>
);

export default Projects;