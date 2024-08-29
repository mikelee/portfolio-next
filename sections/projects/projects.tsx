import projectsData from '../../projectsData';

import styles from './projects.module.scss';

import PhoneDisplay from './phone-display/phone-display';

const Projects = () => (
    <div id='projects' className={styles['projects']}>
        <h1 className={styles['title']}>Projects</h1>
        <PhoneDisplay projects={projectsData} />
    </div>
);

export default Projects;