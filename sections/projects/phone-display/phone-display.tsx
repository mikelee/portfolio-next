import Link from 'next/link';

import styles from './phone-display.module.scss';

import { Project } from '../../../projectsData';

import Phone from '../../../components/phone/phone';

interface Props {
    projects: Project[]
}

const PhoneDisplay: React.FC<Props> = ({ projects }) => (
    <div className={styles['phone-display']}>
        {
            projects.map(project => (
                <section key={project.id} className={styles['project']}>
                    <div className={styles['name-container']}>
                        <h2 className={styles['name']}>{project.name}</h2>
                    </div>
                    <div className={styles['phone-container']}>
                        <Phone imageURL={project.imagePortrait} />
                    </div>
                    <Link href={project.url} className={styles['try-project-button']}>Try it out!</Link>
                </section>
            ))
        }
    </div>
);

export default PhoneDisplay;