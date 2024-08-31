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
                        <h2>
                            <Link className={styles['name']} href={project.url}>{project.name}</Link>
                        </h2>
                    </div>
                    <div className={styles['phone-container']}>
                        <Link className={styles['name']} href={project.url}>
                            <Phone imageURL={project.imagePortrait} />
                        </Link>
                    </div>
                </section>
            ))
        }
    </div>
);

export default PhoneDisplay;