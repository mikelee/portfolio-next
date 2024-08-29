import projectsData from '../../projectsData';

import styles from './projects.module.scss';

import useWindowSize from '../../hooks/useWindowSize';

import LaptopDisplay from './laptop-display/laptop-display';
import PhoneDisplay from './phone-display/phone-display';

const Projects = () => {
    const SMALL_DEVICE_WIDTH = 720;

    const { width: screenWidth } = useWindowSize();
    
    return (
        <div id='projects' className={styles['projects']}>
            <h1 className={styles['title']}>Projects</h1>
            {
                screenWidth <= SMALL_DEVICE_WIDTH
                ? <PhoneDisplay projects={projectsData} />
                : <LaptopDisplay projects={projectsData} />
            }
        </div>
    );
}

export default Projects;