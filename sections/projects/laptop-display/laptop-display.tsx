import { useState } from 'react';
import Link from 'next/link';

import styles from './laptop-display.module.scss';

import { Project } from '../../../projectsData';

import Laptop from '../../../components/laptop/laptop';

interface Props {
    projects: Project[]
}

const LaptopDisplay: React.FC<Props> = ({ projects }) => {
    const [currentProject, setCurrentProject] = useState(projects[0]);

    return (
        <section className={styles['laptop-display']}>
            <div className={styles['project-selector']}>
                {
                    projects.map(project => (
                        <Link key={project.id} href={project.url} className={`${styles['project']} ${currentProject.id === project.id ? styles['selected'] : ''}`} onMouseEnter={() => setCurrentProject(project)}>{project.name}</Link>
                    ))
                }
            </div>
            <div className={styles['laptop-container']}>
                <Link href={currentProject.url}>
                    <Laptop imageURL={currentProject.imageLandscape} />
                </Link>
            </div>
        </section>
    );
}

export default LaptopDisplay;