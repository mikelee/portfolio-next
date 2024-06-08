import type { NextPage } from 'next';

import styles from './home.module.scss';
import Landing from './sections/landing/landing';
import Projects from './sections/projects/projects';
import Contact from './sections/contact/contact';

// This page's metadata is the default metadata in ./layout.tsx (root  layout)

const Home: NextPage = () => {
    return (
        <>
            <Landing />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;