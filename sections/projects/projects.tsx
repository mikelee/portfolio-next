import Link from 'next/link';
import projectsData from '../../projectsData';

import styles from './projects.module.scss';

import Phone from '../../components/phone/phone';

const Projects = () => (
    <div id='projects' className={styles['projects']}>
        <h1 className={styles['title']}>Projects</h1>
        <div className={styles['projects-display']}>
            {
                projectsData.map(project => (
                    <section key={project.id} className={styles['project']}>
                        <div className={styles['name-container']}>
                            <h2 className={styles['name']}>{project.name}</h2>
                        </div>
                        <div className={styles['phone-container']}>
                            <Phone imageURL={project.image} />
                        </div>
                        <Link href={project.url} className={styles['try-project-button']}>Try it out!</Link>
                    </section>
                ))
            }
        </div>
    </div>
);

export default Projects;