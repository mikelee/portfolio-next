import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import styles from './page-layout.module.scss';

import Navigation from '../navigation/navigation.component';

interface Props {
    children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => {
    const [navVisible, setNavVisible] = useState(false);
    
    const pathName = usePathname();

    useEffect(() => {
        setNavVisible(false);
    }, [pathName]);
    
    useEffect(() => {
        navVisible
        ? document.body.style.overflow = 'hidden'
        : document.body.style.overflow = 'visible'
    }, [navVisible]);

    return (
        <div className={styles['pageLayout']}>
            <Navigation navVisible={navVisible} pathName={pathName} setNavVisible={setNavVisible} />
            {children}
        </div>
    );
}

export default PageLayout;