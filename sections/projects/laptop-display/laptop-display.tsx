import { useState } from 'react';

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
                        <div key={project.id} className={`${styles['project']} ${currentProject.id === project.id ? styles['selected'] : ''}`} onMouseEnter={() => setCurrentProject(project)}>{project.name}</div>
                    ))
                }
            </div>
            <div className={styles['laptop-container']}>
                <Laptop imageURL={currentProject.imageLandscape} />
            </div>
        </section>
    );
}

export default LaptopDisplay;